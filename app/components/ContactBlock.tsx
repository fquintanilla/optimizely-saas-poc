import React from "react";
import createApolloClient from "../lib/apollo-client";
import { ContactBlockQuery } from "../graphql/queries";
import { getImageUrl } from "../lib/urlHelper";

interface Props {
  id: number;
}

const ContactBlock = async ({ id }: Props) => {
  const client = createApolloClient();

  var data = await client.query({
    query: ContactBlockQuery,
    variables: {
      id: id,
    },
    context: {
      fetchOptions: {
        next: { revalidate: Number(process.env.REVALIDATE_CACHE_IN_SECONDS) },
      },
    },
  });

  var item = data.data.ContactBlock.items[0];

  var imageUrl = getImageUrl(item.Image.Url);

  return (
    <div className="mt-4 -mb-3">
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <div className="absolute inset-0 bg-grid-slate-100"></div>
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="overflow-visible relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
              src={imageUrl}
            />
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                {item.ContactName}
              </strong>
              <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                {item.Position}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
      </div>
    </div>
  );
};

export default ContactBlock;
