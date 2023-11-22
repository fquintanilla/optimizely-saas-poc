import createApolloClient from "@/app/lib/apollo-client";
import { ContentQuery } from "@/app/graphql/queries";
import PageFactory from "../factory";

interface Props {
  params: { slug: string[] };
}

export default async function Home({ params: { slug } }: Props) {
  var segment: string = "home";

  if (slug) {
    segment = slug[slug.length - 1];
  }

  const client = createApolloClient();

  var data = await client.query({
    query: ContentQuery,
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
    <div>
      <PageFactory
        contentType={data.data.Content.items[0].ContentType}
        segment={segment}
      />
    </div>
  );
}
