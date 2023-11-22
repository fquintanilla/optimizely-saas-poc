import React from "react";

import { StartPageQuery } from "@/app/graphql/queries";
import createApolloClient from "../lib/apollo-client";
import HeroBlock from "./HeroBlock";

const StartPage = async () => {
  const client = createApolloClient();

  var data = await client.query({
    query: StartPageQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 5 }, // every 5 seconds
      },
    },
  });

  return (
    <>
      <HeroBlock
        props={data.data.StartPage.items[0].Hero[0].ContentLink.Expanded}
      />
      <article className="prose p-10">
        <h1>{data.data.StartPage.items[0].Title}</h1>
        <p
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
