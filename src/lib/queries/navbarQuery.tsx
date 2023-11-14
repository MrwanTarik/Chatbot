const { gql } = require('@apollo/client');

export const query = gql`
  query {
    nav(handle: "top_navigation") {
      handle
      title
      ... on Navigation {
        handle
        title
        treeEn: tree {
          page {
            title
            url
            entry_id
          }
          children {
            page {
              title
              url
              entry_id
            }
            children {
              page {
                title
                url
                entry_id
              }
            }
          }
        }
        treeAr: tree(site: "arabic") {
          page {
            title
            url
            entry_id
          }
          children {
            page {
              title
              url
              entry_id
            }
            children {
              page {
                title
                url
                entry_id
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

type ChildType = {
  page: PageType;
  children: ChildType[];
};

type TreeType = {
  page: PageType;
  children: ChildType[];
};

type NavigationType = {
  handle: string;
  title: string;
  treeEn: TreeType[];
  treeAr: TreeType[];
};

export type QueryResultType = {
  nav: NavigationType;
};
