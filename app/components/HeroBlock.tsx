import Link from "next/link";
import React from "react";

const HeroBlock = (props: any) => {
  var item = props.props;

  return <h1>Hero</h1>;
};

function setRaw(html: string) {
  return {
    __html: html,
  };
}

export default HeroBlock;
