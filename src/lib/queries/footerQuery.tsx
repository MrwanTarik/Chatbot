const { gql } = require('@apollo/client');

export const query = gql`
  query {
    nav(handle: "bottom_navigation") {
      handle
      title
      ... on Navigation {
        handle
        title
        treeEn: tree {
          page {
            title
            url
          }
          children {
            page {
              title
              url
            }
            children {
              page {
                title
                url
              }
            }
          }
        }
        treeAr: tree(site: "arabic") {
          page {
            title
            url
          }
          children {
            page {
              title
              url
            }
            children {
              page {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`;

type PageType = {
  title: string;
  url: string;
};

type TreeType = {
  page: PageType;
  children: TreeType[];
};

type NavType = {
  handle: string;
  title: string;
  treeEn: TreeType[];
  treeAr: TreeType[];
};

export type FooterType = {
  nav: NavType;
};
