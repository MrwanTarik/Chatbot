'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function SuccessfullyChangedPassword({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);

  return (
    <div className="bg-auth-bg bg-cover bg-no-repeat h-screen py-20 lg:py-[5.521vw] flex justify-center items-center px-4">
      <div className="w-full lg:w-[38.125vw]  bg-white px-[25px] lg:px-[2.969vw] py-[30px] lg:py-[3.229vw] flex-col items-center justify-center h-full rounded-[15px] relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-[25px] lg:px-[2.969vw] py-[30px] lg:py-[3.229vw]">
          <FadeIn direction="bottom">
            <img
              className="w-[180px] lg:w-[13.021vw] pt-5 sm:pt-0 m-auto object-cover"
              src="/img/done-icon.png"
              alt="securityIcon"
            />
          </FadeIn>
          <FadeIn direction="top">
            <h1 className="diodrum-semibold mt-[15px] lg:mt-[1.5vw] text-[#1E1B3F] pt-[15px] md:pt-[0] mb-4 lg:mb-[1.042vw] text-center font-size-35">
              {t('passChanged')}
            </h1>
          </FadeIn>
          <FadeIn direction="top">
            <p className="font-size-24 tajawal-medium text-[#1E1B3F] mb-6 lg:mb-[2.083vw] text-center">
              {t('passChangedContent')}
            </p>
          </FadeIn>
          <form action="">
            <div className="flex flex-col">
              <Link
                className="w-full text-white flex items-center tajawal-bold justify-center py-[12px] lg:py-[0.833vw] bg-[#7C32C9] rounded-[10px] mb-[15px] lg:mb-[1.042vw] "
                href="/sign-in"
              >
                <p className="pe-[8px] lg:pe-[0.781vw]">{t('signIn')}</p>
                <img
                  src="/img/send-icon.png"
                  className="w-[20px] lg:w-[1.563vw] rtl:rotate-0 ltr:rotate-180 "
                  alt="sendIcon"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
