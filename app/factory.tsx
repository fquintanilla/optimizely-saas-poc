import React from "react";
import StartPage from "./components/StartPage";
import ContentPage from "./components/ContentPage";

interface Props {
  contentType: string[];
  segment: string;
}

const PageFactory = ({ contentType, segment }: Props) => {
  return (
    <>
      {contentType.map((page: any) => {
        switch (page) {
          case "StartPage":
            return <StartPage key="1" />;
          case "ContentPage":
            return <ContentPage key="2" segment={segment} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default PageFactory;