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

export const ContentQuery = gql`
  query ContentQuery($segment: String) {
    Content(where: { RouteSegment: { eq: $segment } }) {
      items {
        RouteSegment
        RelativePath
        ContentType
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
        Image {
          Url
        }
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
                ContentType
              }
              ... on CarouselBlock {
                Images {
                  Url
                }
                ContentType
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
