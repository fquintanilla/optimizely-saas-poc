import React from "react";
import CarouselBlock from "./components/CarouselBlock";
import HeroBlock from "./components/HeroBlock";

interface Props {
  contentAreas: any;
  epieditmode: string;
}

const BlockFactory = ({ contentAreas, epieditmode }: Props) => {
  return (
    <>
      {contentAreas.map((item: any) => {
        var contentTypes = item.ContentLink.Expanded.ContentType;

        if (contentTypes.includes("Hero")) {
          return (
            <HeroBlock
              key={item.ContentLink.Id}
              props={item.ContentLink.Expanded}
              epieditmode={epieditmode}
            />
          );
        } else if (contentTypes.includes("CarouselBlock")) {
          return (
            <CarouselBlock
              key={item.ContentLink.Id}
              props={item.ContentLink.Expanded}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default BlockFactory;
