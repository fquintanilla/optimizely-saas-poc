import Link from "next/link";
import React from "react";

const HeroBlock = (props: any) => {
  var item = props.props;

  return (
    <div className="hero min-h-screen bg-base-200">
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
