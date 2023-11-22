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

  return (
    <>
      <article className="prose p-10">
        <h1>{data.data.ContentPage.items[0].Title}</h1>
        <p
          dangerouslySetInnerHTML={setRaw(
            data.data.ContentPage.items[0].Description
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

export default ContentPage;
