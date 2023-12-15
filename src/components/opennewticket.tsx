'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function OpenNewTicket({ lng }: { lng: string }) {
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
        <div className="flex-1 flex h-screen justify-center items-center  ">
          <div className="w-full lg:w-[67%]">
            <div className="w-full overflow-y-auto">
              <Link
                href={`${lng === 'en' ? 'en' : 'ar'}/dashboard-tickets`}
                className="text-[#1E1B3F] flex items-center pb-[30px] lg:pb-[5.833vh] tajawal-medium font-size-25 gap-x-[15px] lg:gap-x-[20px] "
              >
                <img
                  className="w-[10px] rtl:rotate-0 ltr:rotate-180"
                  src="/img/return-icon.png"
                  alt="returnIcon"
                />
                <span className="font-size-25 tajawal-medium text-[1E1B3F]">
                  {t('backToTickets')}
                </span>
              </Link>
              <FadeIn direction="top">
                <h2 className="text-[#7C32C9] diodrum-semibold font-size-40 pb-[22px] lg:pb-[5.093vh]">
                  {t('newTicket')}
                </h2>
              </FadeIn>
              <form action="">
                <div className="flex flex-col gap-[15px] lg:gap-y-[20px] pb-[25px] lg:pb-[35px]">
                  <FadeIn direction="bottom">
                    <label
                      className="text-[#1E1B3F] tajawal-medium font-size-25"
                      htmlFor="yourProblem"
                    >
                      {t('yourProblem')}
                    </label>
                  </FadeIn>
                  <input
                    id="yourProblem"
                    className=" w-full bg-[#E2E6EF] rounded-[10px] font-size-18 tajawal-medium placeholder:text-[#1E1B3F] placeholder:opacity-50  p-[18px] lg:p-[25px]"
                    type="text"
                    placeholder={t('problemExample')}
                  />
                </div>
                <div className="flex flex-col gap-[15px] lg:gap-y-[20px] pb-[25px] lg:pb-[35px]">
                  <FadeIn direction="bottom">
                    <label
                      className="text-[#1E1B3F] tajawal-medium font-size-25"
                      htmlFor="describeYourProblem"
                    >
                      {t('describeYourProblem')}
                    </label>
                  </FadeIn>
                  <textarea
                    id="describeYourProblem"
                    className=" ak resize-none w-full max-h-[206px] h-[206px] bg-[#E2E6EF] rounded-[10px] font-size-18 tajawal-medium placeholder:text-[#1E1B3F] placeholder:opacity-50  p-[18px] lg:p-[25px]"
                    placeholder={t('describeProblemExample')}
                  />
                </div>
                <div className="flex items-center gap-x-[25px] lg:gap-x-[35px]">
                  <Link
                    className="w-full max-w-[279px] rounded-[10px] py-[12px] bg-[#7C32C9] font-size-20 diodrum-bold text-[white]  lg:py-[16px] flex items-center justify-center gap-x-[10px] lg:gap-x-[15px]"
                    href="/dashboard-tickets/add-ticket/ticket-added"
                  >
                    {t('addTheTicket')}{' '}
                    <img
                      className="w-[25px] lg:w-[30px] ltr:rotate-180 rtl:rotate-0"
                      src="/img/send-icon.png"
                      alt="sendIcon"
                    />
                  </Link>
                  <Link
                    className="font-size-20 diodrum-semibold text-[#1E1B3F]"
                    href="/dashboard-tickets"
                  >
                    {t('Cancel')}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
