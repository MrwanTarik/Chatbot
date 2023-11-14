const { gql } = require('@apollo/client');

// id=""dc9386fd-df5b-4233-96c7-c092ba442f70" // English
// id="1e33ecc2-28e6-452e-b0cb-85c66d5efb47" //arabic
export const AboutQuery = gql`
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
          ... on Set_WebsiteComponents_AboutVisionAndMissionSection {
            type
            title
            description
            mission_section
            missiontitle
            missiondescription
            vision_section
            vision_title
            vision_description
            sample
          }
          ... on Set_WebsiteComponents_BigSliderSectionAboutUs {
            type
            about_us_title
            about_us_description
            about_us_slides {
              id
              title
              description
              picture {
                path: url
              }
              link
            }
          }
          ... on Set_WebsiteComponents_VideoBannerOnScroll {
            type
            title
            description
            video_webm {
              path: url
            }
            video_mp4 {
              path: url
            }
            video_ogg {
              path: url
            }
          }
          ... on Set_WebsiteComponents_ExploreMoreSection {
            type
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
