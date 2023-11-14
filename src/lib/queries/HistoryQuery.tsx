const { gql } = require('@apollo/client');

// id="ced440af-b32c-4af5-8319-d69c0f176f83" // English
// id="26686c8b-2376-4d8d-99e8-d3d9b61f2791" //arabic
export const HistroyQuery = gql`
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
          ... on Set_WebsiteComponents_HistorySection {
            type
            #first section
            title
            description
            #second section
            history_title
            section_description
            milestones {
              year
              content
            }
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
