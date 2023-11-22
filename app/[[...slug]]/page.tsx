import createApolloClient from "@/app/lib/apollo-client";
import { ContentQuery } from "@/app/graphql/queries";
import PageFactory from "../factory";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string[] };
}

export default async function Home({ params: { slug } }: Props) {
  var segment: string = "";

  if (slug) {
    segment = slug[slug.length - 1];
    segment = removeAfterComma(segment);
  }

  if (!segment) {
    segment = "home";
  }

  console.log(segment);

  const client = createApolloClient();

  var data = await client.query({
    query: ContentQuery,
    variables: {
      segment: segment,
    },
    context: {
      fetchOptions: {
        next: { revalidate: process.env.REVALIDATE_CACHE_IN_SECONDS },
      },
    },
  });

  if (data.data.Content.items.length == 0) {
    notFound();
  }

  return (
    <div>
      <PageFactory
        contentType={data.data.Content.items[0].ContentType}
        segment={segment}
      />
    </div>
  );
}

function removeAfterComma(inputString: string) {
  // Use a regular expression to match everything after the double comma
  const regex = /%2C.*/;

  // Replace the matched part with an empty string
  const result = inputString.replace(regex, "");

  return result;
}
