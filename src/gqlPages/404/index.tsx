'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { useTranslation } from '@/app/i18n/client';
import type { ContactUsType } from '@/components/ContactUs';
import ContactUs from '@/components/ContactUs';
import { useSEO } from '@/hooks/useSEO';
import { Homequery } from '@/lib/queries/HomeQuery';

export default function Home({ lng }: { lng: string }) {
  const site = lng === 'en' ? 'default' : 'arabic';
  const id = lng === 'en' ? 'home' : '451996cc-1b39-4a5b-8991-0ac1e49661b2';
  const sdata = useSEO(Homequery, lng, id);
  const { t } = useTranslation(lng);

  const { data } = useSuspenseQuery(Homequery, {
    variables: { site, id },
  });
  return (
    <main className={sdata.main_class_wrapper}>
      <section className="home-hero home-hero__wrapper section-404">
        <div className="home-hero__slider">
          <div className="home-hero__content-v2">
            <div className="home-hero__head-v2">
              <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-start-2 xl:col-span-3 text-center">
                    <div
                      className="home-hero__title-v2 _fadeInUp-scroll"
                      data-position="bottom-to-top"
                      data-delay="150"
                    >
                      <h1>
                        <img className="img-404" src="/img/404.svg" alt="" />
                      </h1>
                    </div>

                    <div
                      className="home-hero__desc _fadeInUp-scroll ltr:lg:pr-0 rtl:lg:pl-0"
                      data-position="top-to-bottom"
                      data-delay="150"
                    >
                      <p className="font-size-25 mt-5">{t('404')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-hero__background">
              <div className="home-hero__background--image">
                <img src="/img/404-hero.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs data={data as ContactUsType} lang={lng} />
    </main>
  );
}
