'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function ForgetPasswordSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  return (
    <div className="bg-auth-bg bg-cover bg-no-repeat h-screen py-20 lg:py-[5.521vw] flex justify-center items-center px-4">
      <div className="w-full lg:w-[38.125vw] bg-white px-[25px] lg:px-[2.969vw] py-[30px] lg:py-[3.229vw] flex items-center justify-start h-full rounded-[15px]">
        <div className="w-full">
          <FadeIn direction="bottom">
            <img
              className="w-[50px] lg:w-[4.688vw] m-auto "
              src="/img/password-ico.png"
              alt="PasswordIco"
            />
          </FadeIn>
          <FadeIn direction="top">
            <h1 className="diodrum-semibold text-purple pt-[15px] md:pt-[0] mb-4 lg:mb-[0.88vw] text-center font-size-40">
              {t('resetPassword')}
            </h1>
          </FadeIn>
          <FadeIn direction="top">
            <p className="font-size-22 tajawal-medium text-[#1E1B3F] mb-4 lg:mb-[1.8vw] text-center">
              {t('enterRequiredData')}
            </p>
          </FadeIn>
          <div className="w-full relative mb-[20px] lg:mb-[1.823vw]">
            <input
              className="font-size-18 w-full tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[#E2E6EF] rounded-[10px] ps-[45px] lg:ps-[3.125vw] placeholder:text-[#1E1B3F]"
              type="email"
              placeholder={t('emailInputPlaceholder')}
              name="userEmail"
              id="userEmail"
            />
            <span>
              <img
                className="w-[18px]  lg:w-[1.25vw] absolute top-[50%] translate-y-[-50%] rtl:right-[15px] ltr:left-[15px] lg:right-[1.198vw] "
                src="/img/email-icon.svg"
                alt="emailIcon"
              />
            </span>
          </div>
          <Link
            className="w-full text-white flex items-center tajawal-bold justify-center py-[12px] lg:py-[0.833vw] bg-[#7C32C9] rounded-[10px] mb-[15px] lg:mb-[1.042vw] "
            href="/sign-in/forget-password/password-verification"
          >
            <p className="pe-[8px] lg:pe-[0.781vw]">{t('next')}</p>
            <img
              src="/img/send-icon.png"
              className="w-[20px] lg:w-[1.563vw] rtl:rotate-0 ltr:rotate-180 "
              alt="sendIcon"
            />
          </Link>
          <div className="flex justify-center items-center mb-[18px] lg:mb-[1.667vw]">
            <p className="tajawal-medium text-[#1E1B3F] font-size-20">
              {t('rememberedPassword')}
            </p>
            <Link
              href="/sign-in/"
              className="text-[#1E1B3F] tajawal-bold ps-[2px] font-size-20 "
            >
              {t('signIn')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
