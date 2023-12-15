import { t } from 'i18next';
import Link from 'next/link';
import React from 'react';

export default function UserTicket() {
  return (
    <div className="p-[15px] lg:p-[24px] bg-white rounded-[10px] flex-col md:flex-row flex items-center relative">
      <div>
        <img
          className="max-w-[150px]"
          src="/img/userImage.png"
          alt="userImage"
        />
      </div>
      <div className="flex-1 h-full flex flex-col md:flex-row justify-between ">
        <div className="flex py-[20px] px-[25px] flex-col justify-between">
          <div>
            <h2 className="diodrum-semibold text-center md:text-start font-size-20 mb-[5px] text-[#332F66] ">
              {t('cantUseChatbot')}
            </h2>
            <div className="flex justify-center md:justify-start mt-[15px]">
              <p className="flex items-center text-[12px] lg:text-[14px] gap-x-[8px] text-[#1E1B3F] tajawal-medium">
                <img
                  className="max-w-[100%]  object-cover"
                  src="/img/time.png"
                  alt="dateIcon"
                />
                {t('time')}
              </p>
            </div>
          </div>
          <div className="flex items-center text-center lg:text-start justify-center lg:justify-start gap-x-[10px] mt-[10px] ">
            <p className="flex items-center gap-x-[10px] tajawal-medium text-[#1E1B3F] text-[16px] lg:text-[18px]">
              <img src="/img/messages-icon.png" alt="messageIcon" /> 10
            </p>
            <p className="flex items-center gap-x-[10px] text-[#1E1B3F] tajawal-medium text-[16px] lg:text-[18px] ">
              <img src="/img/person-icon.svg" alt="personIcon" />
              {t('lastResponse')}
              {t('supportName')}
            </p>
          </div>
        </div>
        <div className="self-center md:mt-[18px]">
          <p className="text-[#1E1B3F tajawal-medium text-[14px] text-center md:text-start lg:text-[16px] pb-[10px] lg:pb-[15px]">
            {t('ticketNumber')}
          </p>
          <Link
            className="inline-block bg-white border-[3px] border-solid rounded-[8px] border-[#1E1B3F] inter-bold text-[12px] text-[#1E1B3F] py-[8px] md:py-[14px] px-[15px] 2xl:px-[16px] lg:text-[14px] hover:bg-[#1E1B3F] hover:text-[white] transition-colors duration-75 ease-in-out hover:border-transparent"
            href="/dashboard-tickets/tickets-details"
          >
            {t('showDetails')}
          </Link>
        </div>
      </div>
      <div className="absolute top-0 rtl:left-0 ltr:right-0 py-[5px] px-[8px] md:py-[8px] md:px-[34px] rounded-se-xl rounded-es-xl bg-[#29B3B4] flex items-center">
        <p className="text-white tajawal-medium text-[16px] ">{t('open')}</p>
      </div>
    </div>
  );
}
