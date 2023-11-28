import React from "react";
import CarouselBlock from "./components/CarouselBlock";
import HeroBlock from "./components/HeroBlock";
import HeadingBlock from "./components/HeadingBlock";
import ContactBlock from "./components/ContactBlock";

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
              id={item.ContentLink.Id}
              epieditmode={epieditmode}
            />
          );
        } else if (contentTypes.includes("CarouselBlock")) {
          return (
            <CarouselBlock key={item.ContentLink.Id} id={item.ContentLink.Id} />
          );
        } else if (contentTypes.includes("HeadingBlock")) {
          return (
            <HeadingBlock key={item.ContentLink.Id} id={item.ContentLink.Id} />
          );
        } else if (contentTypes.includes("ContactBlock")) {
          return (
            <ContactBlock key={item.ContentLink.Id} id={item.ContentLink.Id} />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default BlockFactory;
