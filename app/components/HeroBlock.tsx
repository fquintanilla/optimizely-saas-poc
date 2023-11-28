import Link from "next/link";
import React from "react";
import createApolloClient from "../lib/apollo-client";
import { HeroBlockQuery } from "../graphql/queries";

interface Props {
  id: number;
  epieditmode: string;
}

const HeroBlock = async ({ id, epieditmode }: Props) => {
  const client = createApolloClient();

  var data = await client.query({
    query: HeroBlockQuery,
    variables: {
      id: id,
    },
    context: {
      fetchOptions: {
        next: { revalidate: Number(process.env.REVALIDATE_CACHE_IN_SECONDS) },
      },
    },
  });

  var item = data.data.Hero.items[0];

  var className = "hero bg-base-200";

  // Fix infinite scroll in the on-edit view in the CMS.
  if (epieditmode?.toLowerCase() != "true") {
    className += " min-h-screen";
  }

  return (
    <div className={className}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{item?.Title}</h1>
          <p
            className="py-6"
            dangerouslySetInnerHTML={setRaw(item?.Description)}
          />
          <Link href={item.Link} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

function setRaw(html: string) {
  return {
    __html: html,
  };
}

export default HeroBlock;
