import HeroBlock from "./components/HeroBlock";

import createApolloClient from "@/app/lib/apollo-client";
import { StartPageQuery } from "@/app/graphql/queries";

export default async function Home() {
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
    <main>
      <HeroBlock
        props={data.data.StartPage.items[0].Hero[0].ContentLink.Expanded}
      />
      <article className="prose p-10">
        <h1>{data.data.StartPage.items[0].Title}</h1>
        <p>{data.data.StartPage.items[0].Description}</p>
      </article>
    </main>
  );
}
