const { gql } = require('@apollo/client');

// id="0429945a-e813-4305-ad6d-8cd870b08311" // English
// id="d7434c5b-dfea-4cde-9f45-a111f2492603" //arabic
export const LeadershipQuery = gql`
  query GetEntry($id: String!, $site: String!) {
    entry(id: $id, site: $site) {
      id
      title
      url
      status
      published
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
          ... on Set_WebsiteComponents_TopImageBannerSection {
            type
            is_ir_page
            image {
              path: url
            }
            description
            title
            linking_section
            part_one_link_title
            part_one_link
            second_part_two_title
            link_hover_text
            second_part_link
            sample
          }
          ... on Set_WebsiteComponents_LeadershipSection {
            title
            description
            directors {
              ... on Entry_BoardOfDirectors_BoardOfDirector {
                id
                title
                position
                picture {
                  path: url
                }
                content
              }
              title
              url
              status
              published
            }
            management_title
            management_description
            management_team {
              title
              url
              published
              status
              ... on Entry_CorporateManagement_CorporateManagement {
                id
                title
                position
                picture {
                  path: url
                }
                content
              }
            }
            corporate_management
            type
          }
          ... on Set_WebsiteComponents_ExploreMoreSection {
            explore_more_items {
              id
              title
              description
              image {
                path: url
              }
              link_title
              link
            }
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
  }
`;
