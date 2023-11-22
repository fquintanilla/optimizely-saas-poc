import React from "react";

import { StartPageQuery } from "@/app/graphql/queries";
import createApolloClient from "../lib/apollo-client";
import BlockFactory from "../blockFactory";

const StartPage = async () => {
  const client = createApolloClient();

  var data = await client.query({
    query: StartPageQuery,
    /*context: {
      fetchOptions: {
        next: { revalidate: 5 }, // every 5 seconds
      },
    },*/
  });

  return (
    <>
      <BlockFactory contentAreas={data.data.StartPage.items[0].Hero} />

      <article className="prose p-10">
        <h1
          className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
          data-epi-edit="Title"
        >
          {data.data.StartPage.items[0].Title}
        </h1>
        <div
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={setRaw(
            data.data.StartPage.items[0].Description
          )}
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
