"use client";

import React from "react";

import { usePathname, useSearchParams } from "next/navigation";

const NotFoundPAge = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="p-36">
      <h1 className="next-error-h1">404</h1>
      <div>
        <h2>
          This page could not be found
          <code>
            {pathName}
            {searchParams.toString().length > 0 ? "?" : ""}
            {searchParams.toString()}
          </code>
        </h2>
      </div>
    </div>
  );
};

export default NotFoundPAge;
