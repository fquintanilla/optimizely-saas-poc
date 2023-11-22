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
    context: {
      fetchOptions: {
        next: { revalidate: 5 }, // every 5 seconds
      },
    },
  });

  var page = data.data.ContentPage.items[0];

  return (
    <article className="prose p-10">
      <h1>{page.Title}</h1>
      <p dangerouslySetInnerHTML={setRaw(page.Description)} />
    </article>
  );
};

function setRaw(html: string) {
  return {
    __html: html,
  };
}

export default ContentPage;
