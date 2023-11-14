'use client';

import parse from 'html-react-parser';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { useTranslation } from '@/app/i18n/client';
import { useAos } from '@/hooks/useAos';

type Image = {
  path: string;
};

type StackedItem = {
  description: string;
  link?: string | null;
  title: string;
  link_title?: string | null;
  picture: Image;
};

type WebsiteComponent = {
  type: string;
  description: string;
  stackedItems: StackedItem[];
  link?: string;
  title: string;
};

type Entry = {
  id: string;
  seo_image: Image;
  seo_description: string;
  seo_title: string;
  title: string;
  website_components: WebsiteComponent[];
};

export type ItemsStackedType = {
  entry: Entry;
};

export const dynamic = 'force-dynamic';

export default function ItemsStacked({
  lang,
  data,
}: {
  lang: string;
  data: ItemsStackedType;
}) {
  const { t } = useTranslation(lang);
  useAos({ duration: 700, once: true });

  const websiteComponent = data?.entry.website_components.find(
    (comp) => comp.type === 'items_stacked_section',
  );

  return (
    <section className="home-about home-about__wrapper home-about__wrapper-v9">
      <div className="container mx-auto">
        <div className="home-about__content">
          <div className="two-column two-column__content">
            <div className="grid grid-cols-12 gap-0 lg:gap-10">
              <div className="two-column__title two-column__title--white _fadeInUp-scroll lg:pb-8 col-span-12 lg:col-span-6">
                <h2 className="break-me-br" data-br="4,1" data-aos="fade-down">
                  {websiteComponent?.title || 'A LEADING BASE OIL SUPPLIER'}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-0 lg:gap-10">
              <div className="col-span-12 lg:col-span-5">
                <div
                  className="two-column__desc two-column__desc--white !p-0 _fadeInUp-scroll"
                  data-aos="fade-up"
                >
                  {parse(websiteComponent?.description || '')}
                </div>
                <Link
                  href={websiteComponent?.link || '/'}
                  className="button button__custom button__custom--yellow mt-5 lg:mt-10"
                >
                  <span className="button__custom-text button__custom-text--21">
                    {t('readMore')}
                  </span>
                  <span className="button__custom-icon button__custom-icon--52">
                    <img src="/img/readmore.svg" alt="read" />
                  </span>
                </Link>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="fact-figures fact-figures__wrapper">
                  {websiteComponent?.stackedItems.map((item) => (
                    <div
                      key={uuidv4()}
                      className="fact-figures__box _fadeInUp-scroll"
                      data-aos="fade-down"
                    >
                      <div className="fact-figures__icon">
                        <img src={item.picture.path} alt={item.title} />
                      </div>
                      <div className="fact-figures__content">
                        <div className="fact-figures__title">
                          <h3>{item.title}</h3>
                          <span className="fact-figures__line" />
                        </div>
                        <div className="fact-figures__desc">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
