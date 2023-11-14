import 'swiper/css/bundle';

import Link from 'next/link';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from '@/app/i18n/client';
import { useAos } from '@/hooks/useAos';

export const dynamic = 'force-dynamic';

type SlideType = {
  title: string;
  id: string;
  description: string;
  picture: {
    path: string;
  };
  link?: string;
};

type BigSliderSectionOurProductsType = {
  type: string;
  our_product_title: string;
  our_product_description?: string;
  our_product_slides: SlideType[];
};

export type WebsiteComponentType = {
  website_components: BigSliderSectionOurProductsType[];
};

export type BigSliderOurProductsType = {
  entry: WebsiteComponentType;
};

export default function BigSliderOurProducts({
  data,
  lang,
}: {
  data: BigSliderOurProductsType;
  lang: string;
}) {
  const { t } = useTranslation(lang);
  const bigSliderOurProductsData = data.entry.website_components.find(
    (component) => component.type === 'big_slider_section_our_product',
  );
  // console.log(bigSliderOurProductsData);
  useAos({ duration: 700, once: true });

  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideCount, setSlideCount] = useState(1);
  if (!bigSliderOurProductsData) return null;

  return (
    <section className="our-products__slider">
      <div className="container mx-auto">
        <div className="head our-leadership__head">
          <div className="grid grid-cols-12 gap-0 lg:gap-10 items-start">
            <div
              className="col-start-1 col-span-12 lg:col-start-1 lg:col-span-6 _fadeInUp-scroll"
              data-position="right-top-left"
              data-aos="fade-right"
              data-delay="150"
            >
              <div className="head__title head__title--dark-blue">
                <h2>{bigSliderOurProductsData.our_product_title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto our-products__slider--wrapper">
        <div className="swiper__pagination-wrapper">
          <div className="swiper-pagination-v2">
            <span className="swiper-pagination-current">{currentSlide}</span> /{' '}
            <span className="swiper-pagination-total"> {slideCount} </span>
          </div>
        </div>
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination]}
          spaceBetween={-40}
          loop
          speed={500}
          slidesPerView="auto"
          navigation={{
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
          }}
          pagination={{
            el: '.sustainability-card__pagination',
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 'auto',
              spaceBetween: -40,
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: -40,
            },
            1000: {
              slidesPerView: 1.35,
              spaceBetween: -50,
            },
            1200: {
              slidesPerView: 1.35,
              spaceBetween: -50,
            },
            1366: {
              slidesPerView: 1.35,
              spaceBetween: -50,
            },
            1480: {
              slidesPerView: 1.2,
              spaceBetween: -50,
            },
            1680: {
              slidesPerView: 1.35,
              spaceBetween: -50,
            },
            1800: {
              slidesPerView: 1.35,
              spaceBetween: -50,
            },
          }}
          onSwiper={(swiper) => {
            setSlideCount(swiper.slides.length);
          }}
          onSlideChange={(swiper) => {
            const isLastSlide = swiper.isEnd && !swiper.loopedSlides;
            if (isLastSlide) {
              // Immediately after the transition, manually loop back to the start
              setTimeout(() => {
                swiper.slideToLoop(0);
              }, 300);
            }

            // update and reset the current slide
            setCurrentSlide(swiper.realIndex + 1);
          }}
        >
          {bigSliderOurProductsData.our_product_slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="our-products__slider-box">
                <div className="our-products__slider-box-img">
                  <img src={slide.picture.path} alt={slide.title} />
                </div>

                <Link
                  href={slide.link || '#'}
                  className="our-products__slider-box-content"
                >
                  <div className="our-products__slider-box-title">
                    <h2>{slide.title}</h2>
                  </div>

                  <div className="our-products__slider-box-info">
                    <div className="our-products__slider-box-text">
                      <p>{slide.description}</p>
                    </div>
                    <div className="sustainability-card__link !mt-5">
                      <div className="button button__custom button__custom--yellow mouse hidden">
                        <span className="button__custom-text button__custom-text--21">
                          {t('readMore')}
                        </span>

                        <span className="button__custom-icon button__custom-icon--39">
                          <img src="/img/readmore.svg" alt="read" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sustainability-card__slider-footer">
          <div className="swiper__controller-wrapper rtl:gap-4 rtl:lg:gap-[2vw]">
            <div
              className={
                lang === 'en' ? 'swiper-custom-prev' : 'swiper-custom-next'
              }
            >
              <img src="/img/icon-swiper-left.svg" alt="" />
            </div>
            <div
              className={
                lang === 'en' ? 'swiper-custom-next' : 'swiper-custom-prev'
              }
            >
              <img src="/img/icon-swiper-right.svg" alt="" />
            </div>
          </div>
          <div className="sustainability-card__pagination sustainability-card__pagination--right" />
        </div>
      </div>
    </section>
  );
}
