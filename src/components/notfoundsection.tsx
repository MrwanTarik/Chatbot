'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';
import FadeIn from '@/components/fadescroll';

export default function NotFoundSection() {
  const pathname = usePathname();
  const lng = pathname.split('/')[1];
  const { t } = useTranslation(lng);

  return (
    <div className="flex flex-col px-[20px] lg:px[0] h-screen md:flex-row items-center justify-center lg:justify-center gap-y-7 lg:gap-y-0 lg:gap-x-[6.927vw]">
      <div className="w-full lg:w-[38%]">
        <img className=" max-w-full" src="/img/404-hero.png" alt="notFoundBg" />
      </div>
      <div className="w-full text-center lg:w-[31%]">
        <FadeIn direction="top">
          <Link
            className="flex items-center justify-center gap-x-[16px] "
            href="/"
          >
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
        <FadeIn direction="bottom">
          <h2 className="text-[#7C32C9] diodrum-semibold font-size-30 pb-[15px] lg:pb-[23px]">
            {t('notFoundTitle')}
          </h2>
        </FadeIn>
        <FadeIn direction="bottom">
          <p className="text-[#1E1B3F] tajawal-medium font-size-24 pb-[40px] lg:pb-[70px]">
            {t('notFoundContent')}
          </p>
        </FadeIn>

        <Link
          className="w-full rounded-[10px] py-[12px] bg-[#7C32C9] font-size-20 diodrum-bold text-[white]  lg:py-[16px] flex items-center justify-center gap-x-[10px] lg:gap-x-[15px]"
          href="/dashboard-tickets/add-ticket/ticket-added"
        >
          {t('mainPage')}{' '}
          <img
            className="w-[25px] lg:w-[30px] ltr:rotate-180 rtl:rotate-0"
            src="/img/send-icon.png"
            alt="sendIcon"
          />
        </Link>
      </div>
    </div>
  );
}
