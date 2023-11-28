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
              ContentType
            }
          }
        }
        Title
        Description
      }
    }
  }
`;

export const HeroBlockQuery = gql`
  query HeroBlockQuery($id: Int) {
    Hero(where: { ContentLink: { Id: { eq: $id } } }) {
      items {
        Title
        Description
        Link
      }
    }
  }
`;

export const CarouselBlockQuery = gql`
  query CarouselBlockQuery($id: Int) {
    CarouselBlock(where: { ContentLink: { Id: { eq: $id } } }) {
      items {
        Images {
          Url
        }
      }
    }
  }
`;

export const HeadingBlockQuery = gql`
  query HeadingBlockQuery($id: Int) {
    HeadingBlock(where: { ContentLink: { Id: { eq: $id } } }) {
      items {
        Title
      }
    }
  }
`;

export const ContactBlockQuery = gql`
  query ContactBlockQuery($id: Int) {
    ContactBlock(where: { ContentLink: { Id: { eq: $id } } }) {
      items {
        ContactName
        Position
        Image {
          Url
        }
      }
    }
  }
`;
