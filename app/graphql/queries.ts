import { gql } from "@apollo/client";

export const NavigationQuery = gql`
  query Navigation {
    MenuItem(where: { Ancestors: {}, ParentLink: { Id: { eq: 7 } } }) {
      items {
        NavigationTitle
        Link
      }
    }
  }
`;

export const StartPageQuery = gql`
  query StartPage {
    StartPage {
      items {
        Hero {
          ContentLink {
            Id
            Expanded {
              ... on Hero {
                Title
                Link
                Description
              }
            }
          }
        }
        Title
        Description
      }
    }
  }
`;

export const ContentPageQuery = gql`
  query ContentPageQuery($segment: String) {
    ContentPage(where: { RouteSegment: { eq: $segment } }) {
      items {
        RouteSegment
        RelativePath
        ContentType
        Title
        Description
      }
    }
  }
`;
