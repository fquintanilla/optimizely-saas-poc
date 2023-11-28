import createApolloClient from "@/app/lib/apollo-client";
import { ContentQuery } from "@/app/graphql/queries";
import PageFactory from "../factory";
import { notFound } from "next/navigation";
import Script from "next/script";

interface Props {
  params: { slug: string[] };
  searchParams: { epieditmode: string };
}

export default async function Home({
  params: { slug },
  searchParams: { epieditmode },
}: Props) {
  var segment: string = "";

  if (slug) {
    segment = slug[slug.length - 1];
    segment = removeAfterComma(segment);
  }

  if (!segment) {
    segment = "home";
  }

  const client = createApolloClient();

  var data = await client.query({
    query: ContentQuery,
    variables: {
      segment: segment,
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
        epieditmode={epieditmode}
      />
      {epieditmode?.toLowerCase() === "true" && (
        <Script src="https://www.lakewoodchurch.com/Util/javascript/communicationinjector.js" />
      )}
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
