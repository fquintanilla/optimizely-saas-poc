import Link from "next/link";
import React from "react";

interface Props {
  props: any;
  epieditmode: string;
}

const HeroBlock = ({ props, epieditmode }: Props) => {
  var item = props;
  var className = "hero bg-base-200";

  // Fix infinite scroll in the on-edit view in the CMS.
  if (epieditmode?.toLowerCase() != "true") {
    className += " min-h-screen";
  }

  return (
    <div className={className}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{item?.Title}</h1>
          <p
            className="py-6"
            dangerouslySetInnerHTML={setRaw(item?.Description)}
          />
          <Link href={item.Link} className="btn btn-primary">
            Get Started
          </Link>
        </div>
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
