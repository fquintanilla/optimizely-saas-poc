import React from "react";
import CarouselBlock from "./components/CarouselBlock";
import HeroBlock from "./components/HeroBlock";

interface Props {
  contentAreas: any;
}

const BlockFactory = ({ contentAreas }: Props) => {
  return (
    <>
      {contentAreas.map((item: any) => {
        var contentTypes = item.ContentLink.Expanded.ContentType;

        <h1>Content Area goes here</h1>;
      })}
    </>
  );
};

export default BlockFactory;
