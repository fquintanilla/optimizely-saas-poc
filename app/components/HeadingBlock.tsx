import React from "react";
import createApolloClient from "../lib/apollo-client";
import { HeadingBlockQuery } from "../graphql/queries";

interface Props {
  id: number;
}

const HeadingBlock = async ({ id }: Props) => {
  const client = createApolloClient();

  var data = await client.query({
    query: HeadingBlockQuery,
    variables: {
      id: id,
    },
    context: {
      fetchOptions: {
        next: { revalidate: Number(process.env.REVALIDATE_CACHE_IN_SECONDS) },
      },
    },
  });

  var item = data.data.HeadingBlock.items[0];

  return (
    <div className="mt-4 -mb-3">
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="relative text-xl text-center font-medium leading-6">
            <p className="text-slate-500 dark:text-sky-400">{item.Title}</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
      </div>
    </div>
  );
};

export default HeadingBlock;
