import React from "react";
import createApolloClient from "../lib/apollo-client";
import { CarouselBlockQuery } from "../graphql/queries";
import { getImageUrl } from "../lib/urlHelper";

interface Props {
  id: number;
}

const CarouselBlock = async ({ id }: Props) => {
  var countId = 0;

  const client = createApolloClient();

  var data = await client.query({
    query: CarouselBlockQuery,
    variables: {
      id: id,
    },
    context: {
      fetchOptions: {
        next: { revalidate: Number(process.env.REVALIDATE_CACHE_IN_SECONDS) },
      },
    },
  });

  var item = data.data.CarouselBlock.items[0];

  return (
    <>
      <div className="carousel rounded-box">
        {item.Images.map((image: any) => {
          countId++;
          var imageUrl = getImageUrl(image.Url);
          return (
            <div
              id={"item" + countId}
              key={image.Url}
              className="carousel-item"
            >
              <img src={imageUrl} alt="" width={300} height={400} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CarouselBlock;
