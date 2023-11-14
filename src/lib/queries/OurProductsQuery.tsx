const { gql } = require('@apollo/client');

// id=""a885d243-88a5-43f1-9355-21e02e2f424c" // English
// id="a6566969-55fd-4a1f-bb9e-dcd10498b253" //arabic
export const OurProductsQuery = gql`
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
          ... on Set_WebsiteComponents_OurProductsSection {
            title
            description
            tab_view_title
            category_tab {
              id
              title
              description
              link_title
              link
              category_type {
                title
                id
                slug
              }
            }
            type
          }
          ... on Set_WebsiteComponents_BigSliderSectionOurProduct {
            type
            our_product_title
            our_product_description
            our_product_slides {
              id
              title
              description
              picture {
                path: url
              }
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
    baseoildocs: entries(collection: "base_oil_documents", site: $site) {
      data {
        title
        slug
        ... on Entry_BaseOilDocuments_BaseOilDocument {
          title
          id
          document {
            id
            path: url
          }
          type {
            value
            label
          }
          slug
          published
          status
        }
        published
        status
      }
    }
    byproductsdocs: entries(collection: "by_products_documents", site: $site) {
      data {
        title
        slug
        ... on Entry_ByProductsDocuments_ByProductsDocument {
          title
          id
          document {
            id
            path: url
          }
          slug
          published
          status
        }
        published
        status
      }
    }
  }
`;
