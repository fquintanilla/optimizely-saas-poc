import { gql } from "@apollo/client";

export const NavigationQuery = gql`
  query Navigation {
    MenuItem(where: { Ancestors: {}, ParentLink: { Id: { eq: 7 } } }) {
      cursor
      total
      items {
        NavigationTitle
        Link
      }
    }
  }
`;
