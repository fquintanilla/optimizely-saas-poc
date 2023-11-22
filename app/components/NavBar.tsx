import Link from "next/link";
import React from "react";

import createApolloClient from "@/app/lib/apollo-client";
import { NavigationQuery } from "@/app/graphql/queries";

interface MenuItem {
  NavigationTitle: string;
  Link: string;
}

interface Navigation {
  data: {
    MenuItem: {
      total: number;
      items: MenuItem[];
    };
  };
  loading: boolean;
  networkStatus: number;
}

const NavBar = async () => {
  const client = createApolloClient();

  var data: Navigation = await client.query({
    query: NavigationQuery,
    context: {
      fetchOptions: {
        next: { revalidate: Number(process.env.REVALIDATE_CACHE_IN_SECONDS) },
      },
    },
  });

  const navItems = data.data.MenuItem.items;

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost text-xl">
            Verndale
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((option) => (
              <li key={option.NavigationTitle}>
                <Link
                  key={option.NavigationTitle}
                  href={option.Link}
                  className="mr-5"
                >
                  {option.NavigationTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default NavBar;
