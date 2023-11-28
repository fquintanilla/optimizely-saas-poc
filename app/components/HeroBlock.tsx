import Link from "next/link";
import React from "react";

const HeroBlock = (props: any) => {
  var item = props.props;

  return (
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">{item?.Title}</h1>
      </div>
    </div>
  );
};

function setRaw(html: string) {
  return {
    __html: html,
  };
}

export default HeroBlock;
