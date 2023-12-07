'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function SignUpSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  return (
    <div className=" h-screen bg-auth-bg bg-cover bg-no-repeat flex md:flex-row flex-col flex-nowrap ">
      <div className="h-full w-full md:w-[50%] ">
        <Link
          className="h-full w-full flex justify-center items-center"
          href="/"
        >
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
                  className={`font-size-18 w-full  tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[#E2E6EF] rounded-[10px] ps-[45px] lg:ps-[3.125vw] placeholder:text-[#1E1B3F] ${
                    lng === 'ar' ? 'tele-input' : ''
                  }`}
                  type="tel"
                  placeholder={t('phoneInputPlaceholder')}
                  name="userPhone"
                  id="userPhone"
                />
                <span>
                  <img
                    className="w-[18px]  lg:w-[1.25vw] absolute top-[50%] translate-y-[-50%] rtl:right-[15px] ltr:left-[15px] lg:right-[1.198vw] "
                    src="/img/phone-icon.png"
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

              <div className="flex items-center mb-[20px] lg:mb-[1.823vw]">
                <input
                  className="w-[15px] form-checkbox h-[15px] lg:h-[0.938vw] lg:w-[0.938vw] border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-transparentcursor-pointer accent-purple"
                  type="checkbox"
                  name="signOnPage"
                  value=""
                  id="signOnPage"
                />
                <label
                  className="tajawal-medium font-size-15 text-[#332F66] ps-[10px] lg:ps-[0.521vw] pointer"
                  htmlFor="signOnPage"
                >
                  {t('signOnPage')}
                  <Link href="/" className="text-[#29B3B4]   tajawal-bold">
                    شروط الاستخدام{'  '}
                  </Link>
                  {'و '}
                  <Link
                    href="/"
                    className="text-[#29B3B4] !important tajawal-bold"
                  >
                    سياسة الخصوصية{'  '}
                  </Link>
                </label>
              </div>

              <Link
                className="w-full text-white flex items-center tajawal-bold justify-center py-[12px] lg:py-[0.833vw] bg-[#7C32C9] rounded-[10px] mb-[15px] lg:mb-[1.042vw] "
                href="/sign-up/email-verification"
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
              <div className="flex justify-center items-center mb-[18px] lg:mb-[1.667vw]">
                <p className="tajawal-medium text-[#1E1B3F] font-size-20">
                  {t('alreadyHaveAccount')}
                </p>
                <Link
                  href="/sign-in"
                  className="text-[#1E1B3F] tajawal-bold ps-[2px] font-size-20 "
                >
                  {t('signIn')}
                </Link>
              </div>
              <div className="flex items-center justify-between gap-x-[21px]">
                <div className="flex-1 bg-[#E2E6EF] h-[2px]" />
                <p className="text-[#1E1B3F] tajawal-medium font-size-20">
                  {t('CreateNewAccountWith')}
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
