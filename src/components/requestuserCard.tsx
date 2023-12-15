import { t } from 'i18next';
import React from 'react';

export default function RequestUserCard() {
  return (
    <div className="flex items-center mt-4 lg:mt-8 first:mt-0 gap-x-[15px] lg:gap-x-[1.354vw] mb-[40px] lg:mb-[52px]">
      <div className="w-[40px] lg:w-[3.854vw]">
        <img src="/img/userImageCard.svg" alt="userImageCard" />
      </div>
      <div className="flex flex-col mb-[2px]">
        <h2 className="text-[#7C32C9] diodrum-semibold text-[15px] lg:text-[18px]">
          {t('you')}
        </h2>
        <p className="text-[#332F66]  diodrum-semibold text-[14px] lg:text-[16px]">
          {t('userMessage')}
        </p>
      </div>
    </div>
  );
}
