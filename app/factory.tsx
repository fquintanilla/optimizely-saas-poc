import React from "react";
import StartPage from "./components/StartPage";
import ContentPage from "./components/ContentPage";

interface Props {
  contentType: string[];
  segment: string;
  epieditmode: string;
}

const PageFactory = ({ contentType, segment, epieditmode }: Props) => {
  return (
    <>
      {contentType.map((page: any) => {
        switch (page) {
          case "StartPage":
            return <StartPage key={segment} epieditmode={epieditmode} />;
          case "ContentPage":
            return (
              <ContentPage
                key={segment}
                segment={segment}
                epieditmode={epieditmode}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default PageFactory;
