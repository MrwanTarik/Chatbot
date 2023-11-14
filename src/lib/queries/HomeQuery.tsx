const { gql } = require('@apollo/client');

export const Homequery = gql`
  query GetEntry($id: String!, $site: String!) {
    entry(id: $id, site: $site) {
      id
      title
      url
      status
      ... on Entry_Pages_Page {
        title
        slug
        seo_title
        id
        seo_image {
          path: url
        }
        seo_description
        seo_title
        title
        style_css
        status
        main_class_wrapper
        website_components {
          ... on Set_WebsiteComponents_VideoBannerSliderSection {
            type
            slides {
              id
              title
              sub_title
              description
              banner_type {
                value
                label
              }
              video
              mobile_video
              image {
                path: url
              }
              link
            }
          }
          ... on Set_WebsiteComponents_ItemsStackedSection {
            type
            description
            stackedItems: items {
              description
              link
              title
              link_title
              picture {
                path: url
              }
            }
            link
            title
          }
          ... on Set_WebsiteComponents_SimpleCarouselSectionOurProducts {
            type
            id
            link
            title
            description
            items {
              description
              link
              link_title
              title
              picture {
                path: url
              }
            }
          }
          ... on Set_WebsiteComponents_MiddlePageBannerSection {
            type
            description
            link
            link_title
            title
            parallax_background {
              path: url
            }
            icon {
              path: url
            }
          }
          ... on Set_WebsiteComponents_SingleImageWithTextSection {
            type
            description
            link
            link_title
            title
            image {
              path: url
            }
          }
          ... on Set_WebsiteComponents_LatestNewsSection {
            type
          }
          ... on Set_WebsiteComponents_ContactUsSection {
            type
            added_contact_us
            optional_title
            optional_description
            contact_us {
              handle
              title
              honeypot
              fields {
                handle
                type
                display
                instructions
                width
                config
              }
            }
          }
        }
      }
    }
    newsSectionEntries: entries(
      collection: "posts"
      limit: 3
      sort: "date desc"
      site: $site
    ) {
      data {
        url
        date
        title
        ... on Entry_Posts_Post {
          title
          thumbnail {
            id
            path: url
          }
          content_description
        }
      }
      total
      from
      to
      current_page
      per_page
      has_more_pages
    }
  }
`;
