import { NextRequest, NextResponse } from "next/server";

import createApolloClient from "@/app/lib/apollo-client";
import { NavigationQuery } from "@/app/graphql/queries";

export async function GET(request: NextRequest) {
  const client = createApolloClient();

  var data = await client.query({
    query: NavigationQuery,
    context: {
      fetchOptions: {
        next: { revalidate: process.env.REVALIDATE_CACHE_IN_SECONDS },
      },
    },
  });

  return NextResponse.json({
    date: new Date().toLocaleTimeString(),
    graphQL: data,
  });
}
