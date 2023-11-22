import HeroBlock from "../components/HeroBlock";

import createApolloClient from "@/app/lib/apollo-client";
import { ContentPageQuery, StartPageQuery } from "@/app/graphql/queries";
import { ApolloQueryResult } from "@apollo/client";

interface Props {
  params: { slug: string[] };
}

export default async function Home({ params: { slug } }: Props) {
  const client = createApolloClient();

  var data: ApolloQueryResult<any>;
  var segment: string = "";

  if (!slug) {
    // This is for the start page
    data = await client.query({
      query: StartPageQuery,
      variables: {
        segment: segment,
      },
      context: {
        fetchOptions: {
          next: { revalidate: 5 }, // every 5 seconds
        },
      },
    });
  } else {
    segment = slug[0];
    data = await client.query({
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
  }

  //console.log(content.data.ContentPage.items[0]);

  return (
    <main>
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
    </main>
  );
}

function setRaw(html: string) {
  return {
    __html: html,
  };
}
