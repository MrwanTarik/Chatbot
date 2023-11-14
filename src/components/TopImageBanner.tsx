import Link from 'next/link';

import FadeIn from './fadescroll';

// import { useTranslation } from '@/app/i18n/client';

export const dynamic = 'force-dynamic';
type SeoImage = {
  path: string;
};

type WebsiteComponent = {
  type: string;
  is_ir_page: boolean;
  image: SeoImage;
  description: string;
  title: string;
  linking_section: null | string;
  part_one_link_title: null | string;
  part_one_link: null | string;
  second_part_two_title: null | string;
  link_hover_text: null | string;
  second_part_link: null | string;
  sample: null | string;
};

type Entry = {
  id: string;
  title: string;
  url: string;
  status: string;
  published: boolean;
  slug: string;
  seo_title: string;
  seo_image: SeoImage;
  seo_description: string;
  style_css: null | string;
  main_class_wrapper: string;
  website_components: WebsiteComponent[];
};

export type TopImageBannerType = {
  entry: Entry;
};

export default function TopImageBanner({ data }: { data: TopImageBannerType }) {
  // const { t } = useTranslation(lang);

  const bannerData = data.entry.website_components.find(
    (component) => component.type === 'top_image_banner_section',
  );

  if (!bannerData) return null;

  return (
    <section className={`${data.entry.main_class_wrapper} home-hero__wrapper`}>
      <div className="home-hero__slider">
        <div className="home-hero__content-v2">
          <div className="home-hero__head-v2">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-7">
                  <div className="home-hero__breadcrumb">
                    <ul className="home-hero__breadcrumb-nav">
                      <li className="home-hero__breadcrumb-item">
                        <Link href={data.entry.url}>
                          <span className="home-hero__breadcrumb-main">
                            <img src="/img/breadcrumb.svg" alt="breadcrumb" />
                          </span>
                        </Link>
                      </li>
                      <li className="home-hero__breadcrumb-item">
                        <Link href={data.entry.url}>
                          <span className="home-hero__breadcrumb-arrow">
                            <img src="/img/breadcrumb-arrow.svg" alt="arrow" />
                          </span>
                        </Link>
                      </li>
                      <li className="home-hero__breadcrumb-item">
                        <Link href={data.entry.url}>
                          <span className="home-hero__breadcrumb-current">
                            {data.entry.title.toUpperCase()}
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="home-hero__title-v2 _fadeInUp-scroll"
                    data-position="bottom-to-top"
                    data-delay="150"
                  >
                    <h1>
                      <FadeIn
                        direction="bottom"
                        className="home-hero__title-v2--main"
                      >
                        {bannerData.title}
                      </FadeIn>
                    </h1>
                  </div>

                  <div
                    className="home-hero__desc-v2 !p-0 _fadeInUp-scroll"
                    data-position="top-to-bottom"
                    data-delay="150"
                  >
                    <FadeIn direction="top">{bannerData.description}</FadeIn>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-hero__background">
            <div className="home-hero__background--image">
              <img src={bannerData.image.path} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
