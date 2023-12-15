'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/app/i18n/client';

import ChatgptMessage from './chatgptmessage';
import RequestUserCard from './requestuserCard';
import UserTicketDetails from './userticketdetails';

export default function TicketDetailsSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  return (
    <div className=" w-[calc(100vw-45px)] lg:w-[calc(100vw-68px)] ms-auto bg-white  h-screen  ps-[12px]  lg:ps-[1.875vw] pe-[12px] lg:pe-[2.083vw]">
      <div className="flex flex-col h-full pb-[20px]  lg:pb-[40px] ">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="pe-[25px] lg:pe-[3.229vw] ltr:md:border-r-[3px] rtl:md:border-l-[3px] border-[#1E1B3F] ">
              <img
                className="w-[100px] lg:w-[8.958vw]"
                src="/img/dashboard-logo.png"
                alt="dashboardIcon"
              />
            </div>
            <div className="hidden md:block ps-[25px] lg:ps-[3.229vw]">
              <p className="text-[#29B3B4] tajawal-bold text-[25px] flex items-center gap-x-[13px] lg:gap-x-[18px] lg:text-[35px]">
                <img src="/img/tickets-icon.svg" alt="ticketsIcon" />{' '}
                {t('tickets')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-[15px] lg:gap-x-[40px]">
            <div className="relative group">
              <img
                className="min-w-[22px]  max-w-[22px] lg:min-w-[30px] lg:max-w-[30px] cursor-pointer"
                src="/img/notification-icon.png"
                alt="notificationIcon"
              />
              <div className="absolute opacity-0 invisible transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:visible  top-[60px] min-w-[280px] lg:min-w-[424px] z-50 left-[50%] translate-x-[-50%] bg-white shadow-custom pt-[35px]  rounded-[10px]  h-[434px] flex flex-col">
                <h2 className="text-[#7C32C9] px-[25px] lg:px-[40px] diodrum-semibold text-[15px] lg:text-[17px] pb-[17px]">
                  {t('notification')}
                </h2>
                <div className="flex-1 h-[330px] overflow-y-auto ak">
                  <div className="bg-[#F4F4F4]">
                    <p className="px-[25px] truncate max-w-[280px] lg:max-w-[300px] cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px] bg-[#F4F4F4] text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                  <div className="bg-[#fff]">
                    <p className="px-[25px] truncate max-w-[280px] lg:max-w-[300px]  cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px]  text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                  <div className="bg-[#fff]">
                    <p className="px-[25px] truncate max-w-[280px] lg:max-w-[300px]  cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px]  text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                  <div className="bg-[#fff]">
                    <p className="px-[25px]  truncate max-w-[280px] lg:max-w-[300px] cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px] bg-[#F4F4F4] text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                  <div className="bg-[#fff]">
                    <p className="px-[25px] truncate max-w-[280px] lg:max-w-[300px]  cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px] bg-[#F4F4F4] text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                  <div className="bg-[#fff]">
                    <p className="px-[25px] truncate max-w-[280px] lg:max-w-[300px] cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px]  text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                  <div className="bg-[#fff]">
                    <p className="px-[25px] truncate max-w-[280px] lg:max-w-[300px]  cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px]  text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                  <div className="bg-[#fff]">
                    <p className="px-[25px]  truncate max-w-[280px] lg:max-w-[300px] cursor-pointer lg:px-[40px] py-[15px] lg:py-[19px]  text-[#1E1B3F] tajawal-medium text-[14px] ">
                      <span className="tajawal-bold text-[#1E1B3F]">
                        ابراهيم علي
                      </span>{' '}
                      علق على التذكرة الخاصة بك
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="rounded-[8px]  px-[10px] lg:px-[36px] mt-[35px] lg:my-[2vw] mb-[28px] py-[14px] lg:py-[0.885vw] w-full border-2 bg-[#7c32c9] border-solid border-[#7C32C9] flex items-center justify-center"
              href="/dashboard-tickets/add-ticket"
            >
              <img
                className="w-[18px] lg:w-[24px]"
                src="/img/write-icon.png"
                alt="writeIcon"
              />
              {/* diordrum needed */}
              <h2 className="ps-[8px] text-white text-[13px] md:text-[20px] inter-bold">
                {t('openNewTicket')}
              </h2>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-between overflow-y-auto">
          <div className="hidden h-full lg:flex flex-col lg:w-[15.3%] overflow-y-auto">
            <div>
              <UserTicketDetails />
            </div>
            <div className="flex-1 bg-[#E2E6EF] rounded-[10px] w-full">
              <h2 className="bg-[#332F66] rounded-t-[10px] relative py-[16px] flex justify-center text-white font-size-18 diodrum-semibold">
                {t('youAreTalkingTo')}{' '}
                <img
                  className="absolute -bottom-[9px] left-[50%] translate-x-[-50%]"
                  src="/img/after-arrow.svg"
                  alt="DownArrow"
                />
              </h2>
              <div className="lg:pt-[2.865vw] flex flex-col items-center">
                <img
                  src="/img/service-user.png"
                  className="lg:w-[9.596vw] rounded-[5px] max-h-[190px] mb-[30px] object-cover"
                  alt="serviceUser"
                />
                <h2 className="text-[#1E1B3F] font-size-28 diodrum-semibold">
                  {t('customerServiceName')}
                </h2>
                <p className="font-size-20 tajawal-medium text-[#332F66] mt-[6px] mb-[17px]">
                  {t('customerServicejob')}
                </p>
                <p className=" text-[#1E1B3F] tajawal-regular text-[16px] flex items-center gap-x-[5px] mb-[15px] px-[5px]">
                  <span className="w-[11px] h-[11px] rounded-[50%]  bg-[#332F66] " />
                  {t('lastSeen')}: {t('today')}. {t('lastSeenTime')}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] h-full lg:rounded-[30px] flex flex-col bg-[#E2E6EF] w-full lg:w-[71.979vw] py-[20px] lg:pb-[30px] lg:pt-[50px] px-[15px] sm:px-[30px] lg:px-[55px]">
            <div className="flex-1 overflow-y-auto  mb-[30px] lg:mb-[50px]">
              <RequestUserCard />
              <ChatgptMessage />
            </div>
            <form action="">
              <div className="relative">
                <input
                  className="rounded-[10px] pe-[46px] lg:pe-[60px] bg-white tajawal-medium text-[15px] lg:text-[18px] text-[#1E1B3F] py-[15px] lg:py-[22px] px-[16px] lg:px[23] w-full"
                  type="text"
                  placeholder={t('writeExplanation')}
                />
                <img
                  className="w-[22px] lg:w-[30px] absolute top-[50%] translate-y-[-50%]  rtl:left-[15px] ltr:right-[15px] lg:rtl:left-[23px] lg:ltr:right-[23px] ltr:rotate-180 "
                  src="/img/send.svg"
                  alt="sendIco"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
