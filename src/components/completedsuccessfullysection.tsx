'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function CompletedSuccessfullySection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);

  return (
    <div className=" h-screen bg-auth-bg bg-cover bg-no-repeat flex md:flex-row flex-col flex-nowrap ">
      <div className="h-full w-full md:w-[50%] flex justify-center items-center ">
        <Link className="" href="/">
          <img
            src="/img/logo.png"
            className="w-[120px] lg:w-[10.417vw] object-cover"
            alt="ChatbotLogo"
          />
        </Link>
      </div>
      <div className="h-full md:w-[50%] bg-white rounded-t-[15px] flex flex-col justify-center items-center">
        <div className="w-full px-[15px] lg:px-0 lg:w-[29.688vw] h-auto">
          <FadeIn direction="bottom">
            <img
              className="w-[180px] lg:w-[13.021vw] pt-5 sm:pt-0 m-auto object-cover"
              src="/img/done-icon.png"
              alt="securityIcon"
            />
          </FadeIn>
          <FadeIn direction="top">
            <h1 className="diodrum-semibold mt-[15px] lg:mt-[1.5vw] text-[#1E1B3F] pt-[15px] md:pt-[0] mb-4 lg:mb-[1.042vw] text-center font-size-35">
              {t('signUpDone')}
            </h1>
          </FadeIn>
          <FadeIn direction="top">
            <p className="font-size-24 tajawal-medium text-[#1E1B3F] mb-6 lg:mb-[2.083vw] text-center">
              {t('useOurServices')}
            </p>
          </FadeIn>
          <form action="">
            <div className="flex flex-col">
              <Link
                className="w-full text-white flex items-center tajawal-bold justify-center py-[12px] lg:py-[0.833vw] bg-[#7C32C9] rounded-[10px] mb-[15px] lg:mb-[1.042vw] "
                href="/"
              >
                <p className="pe-[8px] lg:pe-[0.781vw]">
                  {t('createNewAccount')}
                </p>
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
      <div />
    </div>
  );
}
