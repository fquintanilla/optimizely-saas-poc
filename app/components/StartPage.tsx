import React from "react";

import { StartPageQuery } from "@/app/graphql/queries";
import createApolloClient from "../lib/apollo-client";
import BlockFactory from "../blockFactory";

interface Props {
  epieditmode: string;
}

const StartPage = async ({ epieditmode }: Props) => {
  const client = createApolloClient();

  var data = await client.query({
    query: StartPageQuery,
    context: {
      fetchOptions: {
        next: { revalidate: Number(process.env.REVALIDATE_CACHE_IN_SECONDS) },
      },
    },
  });

  var page = data.data.StartPage.items[0];

  return (
    <>
      <div data-epi-edit="Hero">
        <BlockFactory contentAreas={page.Hero} epieditmode={epieditmode} />
      </div>

      <article className="prose p-10">
        <h1
          className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
          data-epi-edit="Title"
        >
          {page.Title}
        </h1>
        <div
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          data-epi-edit="Description"
          dangerouslySetInnerHTML={setRaw(page.Description)}
        />
      </article>
    </>
  );
};

function setRaw(html: string) {
  return {
    __html: html,
  };
}

export default StartPage;
