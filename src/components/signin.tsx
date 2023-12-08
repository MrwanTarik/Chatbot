'use client';

import Link from 'next/link';
import React from 'react';

import { LanguageSwitcherClient } from '@/app/[lng]/languageSwitcher/client';
import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function SignInSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  return (
    <div className=" h-screen bg-auth-bg bg-cover bg-no-repeat flex md:flex-row flex-col flex-nowrap ">
      <div className="absolute top-[20px] rtl:left-[20px] ltr:right-[20px] text-white md:text-black">
        <LanguageSwitcherClient lng={lng} />
      </div>
      <div className="h-full w-full md:w-[50%] flex justify-center items-center ">
        <Link href="/">
          <img
            src="/img/logo.png"
            className="w-[120px] lg:w-[10.417vw] object-cover"
            alt="ChatbotLogo"
          />
        </Link>
      </div>
      <div className="h-full md:w-[50%] bg-white rounded-[15px] flex flex-col justify-center items-center">
        <div className="w-full px-[15px] lg:px-0 lg:w-[29.688vw] h-auto">
          <FadeIn direction="bottom">
            <h1 className="diodrum-semibold text-purple pt-[15px] md:pt-[0] mb-4 lg:mb-[1.042vw] text-center font-size-40">
              {t('signInTitle')}
            </h1>
          </FadeIn>
          <FadeIn direction="top">
            <p className="font-size-22 tajawal-medium text-[#1E1B3F] mb-6 lg:mb-[2.083vw] text-center">
              {t('signInContent')}
            </p>
          </FadeIn>
          <form action="">
            <div className="flex flex-col">
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
              <div className="w-full relative mb-[20px] lg:mb-[1.823vw]">
                <input
                  className="font-size-18 w-full tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[#E2E6EF] rounded-[10px] ps-[45px] pe-[45px] lg:pe-[3.125vw] lg:ps-[3.125vw] placeholder:text-[#1E1B3F]"
                  type="password"
                  placeholder={t('passwordInputPlaceholder')}
                  name="userPassword"
                  id="userPassword"
                />
                <span>
                  <img
                    className="w-[18px] lg:w-[1.25vw] absolute top-[50%] translate-y-[-50%] rtl:right-[15px] ltr:left-[15px] rtl:lg:right-[1.198vw] ltr:lg:left-[1.198vw] "
                    src="/img/pass-icon.png"
                    alt="emailIcon"
                  />
                </span>
                <span>
                  <img
                    className="w-[18px] lg:w-[1.25vw] absolute top-[50%] translate-y-[-50%] rtl:left-[15px] ltr:right-[15px] rtl:lg:left-[1.198vw] ltr:lg:right-[1.198vw] "
                    src="/img/eye-icon.svg"
                    alt="emailIcon"
                  />
                </span>
              </div>
              <div className="flex justify-between items-center w-full mb-[20px] lg:mb-[1.823vw]">
                <div className="flex items-center">
                  <input
                    className="w-[15px] form-checkbox h-[15px] lg:h-[0.938vw] lg:w-[0.938vw] border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-transparentcursor-pointer accent-purple"
                    type="checkbox"
                    name="rememberMe"
                    value=""
                    id="rememberMe"
                  />
                  <label
                    className="tajawal-medium font-size-18 text-[#332F66] ps-[5px] lg:ps-[0.521vw] pointer"
                    htmlFor="rememberMe"
                  >
                    {t('rememberMe')}
                  </label>
                </div>
                <div className="flex">
                  <Link
                    className="w-full tajawal-medium font-size-18 text-[#332F66]"
                    href="/sign-in/forget-password"
                  >
                    {t('forgotPassword')}
                  </Link>
                </div>
              </div>
              <Link
                className="w-full text-white flex items-center tajawal-bold justify-center py-[12px] lg:py-[0.833vw] bg-[#7C32C9] rounded-[10px] mb-[15px] lg:mb-[1.042vw] "
                href="/"
              >
                <p className="pe-[8px] lg:pe-[0.781vw]">{t('signIn')}</p>
                <img
                  src="/img/send-icon.png"
                  className="w-[20px] lg:w-[1.563vw] rtl:rotate-0 ltr:rotate-180 "
                  alt="sendIcon"
                />
              </Link>
              <div className="flex justify-center items-center mb-[18px] lg:mb-[1.667vw]">
                <p className="tajawal-medium text-[#1E1B3F] font-size-20">
                  {t('dontHaveAccount')}
                </p>
                <Link
                  href="/sign-up"
                  className="text-[#1E1B3F] tajawal-bold ps-[2px] font-size-20 "
                >
                  {t('createAccount')}
                </Link>
              </div>
              <div className="flex items-center justify-between gap-x-[21px]">
                <div className="flex-1 bg-[#E2E6EF] h-[2px]" />
                <p className="text-[#1E1B3F] tajawal-medium font-size-20">
                  {t('signInWith')}
                </p>
                <div className="flex-1 bg-[#E2E6EF] h-[2px]" />
              </div>
              <div className="flex flex-row flex-wrap md:flex-nowrap mb-6 md:mb-6 justify-center gap-y-6 lg:justify-between mt-[22px] lg:mt-[1.719vw]">
                <Link
                  href="/"
                  className="flex justify-center items-center w-[48%] lg:w-full"
                >
                  <img
                    src="/img/google-icon.svg"
                    alt="googleIcon"
                    className="w-[18px] lg:w-[24px]"
                  />
                  <p className="tajawal-bold ps-[5px] lg:ps-[10px] font-size-18 text-[#332F66]">
                    {t('googleAccount')}
                  </p>
                </Link>
                <Link
                  href="/"
                  className="flex justify-center  items-center w-[48%] lg:w-full"
                >
                  <img
                    src="/img/apple-icon.svg"
                    alt="googleIcon"
                    className="w-[18px] lg:w-[24px]"
                  />
                  <p className="tajawal-bold ps-[5px] lg:ps-[10px] font-size-18 text-[#332F66]">
                    {t('macAccount')}
                  </p>
                </Link>
                <Link
                  href="/"
                  className="flex justify-center  items-center w-[48%] lg:w-full"
                >
                  <img
                    src="/img/facebook-icon.svg"
                    alt="googleIcon"
                    className="w-[18px] lg:w-[24px]"
                  />
                  <p className="tajawal-bold ps-[5px] lg:ps-[10px] font-size-18 text-[#332F66]">
                    {t('facebookAccount')}
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div />
    </div>
  );
}
