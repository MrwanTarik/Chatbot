'use client';

import 'swiper/css/bundle';

import Link from 'next/link';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

// import { LanguageSwitcherClient } from '@/app/[lng]/languageSwitcher/client';
// import { useTranslation } from '@/app/i18n/client';

export const dynamic = 'force-dynamic';
interface SEOImage {
  path: string;
}

interface BannerType {
  value: string;
  label: string;
}

interface Slide {
  id: string;
  title: string;
  sub_title: string;
  description: string;
  banner_type: BannerType;
  video: string;
  mobile_video: string;
  image: null | { path: string };
  link: string;
}

interface WebsiteComponents {
  type: string;
  slides: Slide[];
}

interface Entry {
  id: string;
  seo_image: SEOImage;
  seo_description: string;
  seo_title: string;
  title: string;
  style_css: null | string;
  status: string;
  website_components: WebsiteComponents[];
}

export interface VideoBannerSliderInterface {
  entry: Entry;
}

export default function VideoBannerSlider({
  lang,
  data,
}: {
  lang: string;
  data: VideoBannerSliderInterface;
}) {
  const { t } = useTranslation(lang);

  return (
    <section className="home-hero home-hero__wrapper">
      <Swiper
        className="home-hero__slider"
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.home-hero__slider-next',
          prevEl: '.home-hero__slider-prev',
        }}
        watchOverflow
      >
        <SwiperSlide>
          {data?.entry.website_components?.[0]?.slides.map((slide) => (
            <div className="home-hero__content" key={slide.id}>
              <div className="home-hero__head">
                <div className="container mx-auto">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-9">
                      <div
                        className="home-hero__title _fadeInUp-scroll"
                        data-position="bottom-to-top"
                        // data-aos="fade-down"
                        data-delay="150"
                      >
                        <FadeIn direction="bottom">
                          <h1>
                            <span className="home-hero__title--main">
                              {slide.title}
                            </span>
                            <span className="home-hero__title--sub">
                              {slide.sub_title}
                            </span>
                          </h1>
                        </FadeIn>
                      </div>

                      <div
                        // data-aos="fade-down"

                        className="home-hero__desc _fadeInUp-scroll"
                        data-position="bottom-to-top"
                        data-delay="150"
                      >
                        <FadeIn>{slide.description}</FadeIn>
                      </div>

                      <div
                        className="home-hero__link _fadeInUp-scroll"
                        // data-aos="fade-up"
                      >
                        <Link
                          href="/"
                          className="button button__custom button__custom--yellow"
                        >
                          <FadeIn className="button__custom-text button__custom-text--21">
                            {t('readMore')}
                          </FadeIn>

                          <FadeIn className="button__custom-icon button__custom-icon--52">
                            <img src="/img/readmore.svg" alt="read" />
                          </FadeIn>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="home-hero__background">
                <div className="home-hero__background--video">
                  <video
                    playsInline
                    webkit-playsinline="true"
                    loop
                    poster="/img/poster.webp"
                    muted
                    id="homeHeroVideo"
                    autoPlay
                    data-mobile={slide.mobile_video}
                    data-desktop={slide.video}
                  >
                    <source
                      id="homeHeroVideoSource"
                      src={slide.video}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>

      <div className="home-hero__animation is-animate">
        <div className="home-hero__animation--image-first">
          <img src="/img/icon-bottom-arrow.svg" alt="alt text" />
        </div>
        <div className="home-hero__animation--image-second">
          <img src="/img/icon-bottom-arrow.svg" alt="alt text" />
        </div>
      </div>
    </section>
  );
}
