import { t } from 'i18next';
import React from 'react';

export default function UserTicketDetails() {
  return (
    <div className="py-[25px] lg:py-[40px] flex flex-col items-start">
      <div className="mb-[45px]">
        <h2 className="diodrum-semibold text-center md:text-start font-size-30 mb-[30px] text-[#332F66] ">
          {t('cantUseChatbot')}
        </h2>
        <div className="flex gap-x-[30px] items-center">
          <div className=" py-[5px] px-[8px] md:py-[8px] md:px-[34px] rounded-se-xl rounded-es-xl bg-[#29B3B4] flex items-center">
            <p className="text-white tajawal-medium text-[16px] ">
              {t('open')}
            </p>
          </div>
          <p className="text-[#1E1B3F tajawal-medium text-[14px] text-center md:text-start lg:text-[16px]">
            {t('ticketNumber')}
          </p>
        </div>
      </div>
    </div>
  );
}
