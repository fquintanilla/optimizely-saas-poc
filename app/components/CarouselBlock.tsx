import Image from "next/image";
import React from "react";

const CarouselBlock = (props: any) => {
  var item = props.props;
  var countId = 0;

  return (
    <>
      <div className="carousel rounded-box">
        {item.Images.map((image: any) => {
          countId++;
          var imageUrl =
            "https://app-ocxcfrqu46ks0prod.cms.optimizely.com" + image.Url;
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
