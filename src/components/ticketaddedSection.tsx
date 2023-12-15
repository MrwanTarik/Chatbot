'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function TicketAddedSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);

  return (
    <div className=" w-[calc(100vw-45px)] lg:w-[calc(100vw-68px)] ms-auto bg-white  h-screen  ps-[12px]  lg:ps-0 pe-[12px] lg:pe-0">
      <div className="h-full flex flex-col lg:flex-row  ">
        <div className="bg-add-ticket-hero bg-cover bg-no-repeat h-full hidden lg:flex justify-center lg:w-[35%] pt-[60px] lg:pt-[11.944vh] ">
          <FadeIn direction="bottom">
            <Link className="flex h-fit  items-center gap-x-[16px] " href="/">
              <img
                src="/img/img-logo.png"
                className="w-[43px] object-cover"
                alt="ChatbotLogo"
              />
              <span className="diodrum-semibold lg:text-[40px] xl:text-[50px] text-[#CFC6D8]">
                {t('logo')}
              </span>
            </Link>
          </FadeIn>
        </div>
        <div className="flex-1 flex h-full justify-center items-center  ">
          <div className="text-center">
            <FadeIn direction="bottom">
              <img
                className="w-[180px] lg:w-[13.021vw] pt-5 sm:pt-0 m-auto object-cover"
                src="/img/done-icon.png"
                alt="securityIcon"
              />
            </FadeIn>
            <FadeIn direction="top">
              <h1 className="diodrum-semibold mt-[15px] lg:mt-[1.5vw] text-[#1E1B3F] pt-[15px] md:pt-[0] mb-4 lg:mb-[1.042vw] text-center font-size-35">
                {t('receivedTicket')}
              </h1>
            </FadeIn>
            <FadeIn direction="top">
              <p className="font-size-24 tajawal-medium text-[#1E1B3F] mb-6 lg:mb-[2.083vw] text-center">
                {t('receivedTicketContent')}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
