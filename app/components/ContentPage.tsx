import React from "react";

import { ContentPageQuery } from "@/app/graphql/queries";
import createApolloClient from "../lib/apollo-client";

interface Props {
  segment: string;
}

const ContentPage = async ({ segment }: Props) => {
  const client = createApolloClient();

  var data = await client.query({
    query: ContentPageQuery,
    variables: {
      segment: segment,
    },
  });

  var page = data.data.ContentPage.items[0];

  return (
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
      <img src={page.Image.Url} data-epi-edit="Image" />
    </article>
  );
};

function setRaw(html: string) {
  return {
    __html: html,
  };
}

export default ContentPage;
