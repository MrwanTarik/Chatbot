'use client';

import React, { useState } from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function DashboardFaqSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const [activeTab, setActiveTab] = useState<string>('popularQuestion');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleTabClick = (tab: string): void => {
    setActiveTab(tab);
    setOpenAccordion(null);
  };

  const handleAccordionClick = (accordion: string): void => {
    setOpenAccordion(openAccordion === accordion ? null : accordion);
  };

  return (
    <div className=" w-[calc(100vw-45px)] lg:w-[calc(100vw-68px)] ms-auto bg-white  h-screen  ps-[12px]  lg:ps-[1.875vw] pe-[12px] lg:pe-[2.083vw]">
      <div className="flex flex-col h-full">
        <div className="flex pt-[30px] items-center lg:pt-[2vw] mb-[40px] lg:mb-[60px]">
          <div className="pe-[25px] lg:pe-[3.229vw] ltr:md:border-r-[3px] rtl:md:border-l-[3px] border-[#1E1B3F] ">
            <FadeIn direction="bottom">
              <img
                className="w-[100px] lg:w-[8.958vw]"
                src="/img/dashboard-logo.png"
                alt="dashboardIcon"
              />
            </FadeIn>
          </div>
          <div className="md:flex ps-[25px] lg:ps-[3.229vw] items-center">
            <FadeIn direction="bottom">
              <p className="text-[#29B3B4] settings-icon tajawal-bold flex items-center gap-x-[13px] lg:gap-x-[18px] text-[15px] lg:text-[35px]">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="ph:question-fill" clip-path="url(#clip0_143_474)">
                    <path
                      id="Vector"
                      d="M12 0.410156C9.62663 0.410156 7.30655 1.11394 5.33316 2.43252C3.35977 3.7511 1.8217 5.62524 0.913451 7.81795C0.00519941 10.0107 -0.232441 12.4235 0.230582 14.7512C0.693605 17.079 1.83649 19.2172 3.51472 20.8954C5.19295 22.5737 7.33115 23.7166 9.65892 24.1796C11.9867 24.6426 14.3995 24.405 16.5922 23.4967C18.7849 22.5885 20.6591 21.0504 21.9776 19.077C23.2962 17.1036 24 14.7835 24 12.4102C23.9966 9.22859 22.7313 6.17829 20.4816 3.92858C18.2319 1.67888 15.1816 0.413516 12 0.410156ZM12 19.7948C11.7262 19.7948 11.4585 19.7136 11.2308 19.5614C11.0031 19.4093 10.8256 19.193 10.7208 18.94C10.616 18.687 10.5886 18.4086 10.642 18.14C10.6954 17.8714 10.8273 17.6247 11.0209 17.4311C11.2146 17.2374 11.4613 17.1056 11.7299 17.0521C11.9985 16.9987 12.2769 17.0261 12.5299 17.1309C12.7829 17.2357 12.9991 17.4132 13.1513 17.6409C13.3034 17.8686 13.3846 18.1363 13.3846 18.4102C13.3846 18.7774 13.2387 19.1296 12.9791 19.3892C12.7194 19.6489 12.3672 19.7948 12 19.7948ZM12.9231 14.1732V14.2563C12.9231 14.5011 12.8258 14.7359 12.6527 14.909C12.4796 15.0821 12.2448 15.1794 12 15.1794C11.7552 15.1794 11.5204 15.0821 11.3473 14.909C11.1742 14.7359 11.0769 14.5011 11.0769 14.2563V13.3332C11.0769 13.0884 11.1742 12.8536 11.3473 12.6805C11.5204 12.5074 11.7552 12.4102 12 12.4102C13.5265 12.4102 14.7692 11.3717 14.7692 10.1025C14.7692 8.83323 13.5265 7.79477 12 7.79477C10.4735 7.79477 9.23077 8.83323 9.23077 10.1025V10.564C9.23077 10.8088 9.13352 11.0436 8.96041 11.2167C8.7873 11.3898 8.55251 11.4871 8.3077 11.4871C8.06288 11.4871 7.82809 11.3898 7.65498 11.2167C7.48187 11.0436 7.38462 10.8088 7.38462 10.564V10.1025C7.38462 7.81208 9.45462 5.94862 12 5.94862C14.5454 5.94862 16.6154 7.81208 16.6154 10.1025C16.6154 12.1078 15.0277 13.7867 12.9231 14.1732Z"
                      fill="#29B3B4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_143_474">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                {t('faq')}
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex flex-col gap-y-[20px] md:gap-y-[0] md:flex-row justify-center md:justify-between  h-full pb-[20px]  lg:pb-[40px] ">
            <div className="tabs-holder pt-[40px] md:pt-[7.685vh] flex flex-col gap-y-[25px]">
              {['popularQuestion', 'privacyPolicy', 'termsOfUse'].map((tab) => (
                <button
                  type="button"
                  key={tab}
                  className={`tab-button text-[#332F66] diodrum-medium text-[18px] lg:font-size-24 ${
                    activeTab === tab ? 'active-tab' : ''
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {t(tab)}
                </button>
              ))}
            </div>
            <div className="accordion-holder h-full flex flex-col w-full ak md:w-[80%]">
              {/* Accordions for the active tab */}
              {activeTab === 'popularQuestion' && (
                <div className="flex-1 overflow-y-auto flex-col gap-y-[15px] w-full p-[30px] md:p-[57px] bg-[#E2E6EF] rounded-[30px]">
                  {/* Example Accordion Item */}
                  <button
                    type="button"
                    className="bg-white w-full flex my-[15px] flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion1')}
                  >
                    <div className="flex items-center gap-x-[10px]  gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion1' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full flex my-[15px] flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion2')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion2' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full flex my-[15px] flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion3')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion3' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full flex my-[15px] flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion4')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion4' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  {/* Add more accordion items as needed */}
                </div>
              )}
              {activeTab === 'privacyPolicy' && (
                <div className="flex-1 overflow-y-auto flex-col  gap-y-[15px] w-full p-[30px] md:p-[57px] bg-[#E2E6EF] rounded-[30px]">
                  {/* Example Accordion Item */}
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion1')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion1' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] tajawal-medium text-[14px] md:text-[17px]">
                          {/* Accordion content */}
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion2')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion2' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion3')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion3' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion4')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion4' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  {/* Add more accordion items as needed */}
                </div>
              )}
              {activeTab === 'termsOfUse' && (
                <div className="flex-1 overflow-y-auto flex-col gap-y-[15px] w-full p-[30px] md:p-[57px] bg-[#E2E6EF] rounded-[30px]">
                  {/* Example Accordion Item */}
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion1')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion1' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion2')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion2' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion3')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion3' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Optio, sint! Ab vel earum exercitationem dolore
                          voluptates tempore laborum, ut numquam libero quo vero
                          ea? Voluptatibus, laboriosam. Eaque hic quod voluptas?
                        </p>
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    className="bg-white w-full my-[15px] flex flex-col p-[18px] md:p-[28px] rounded-[10px]"
                    onClick={() => handleAccordionClick('accordion4')}
                  >
                    <div className="flex items-center gap-x-[10px] md:gap-x-[22px] ">
                      <img src="/img/faq-closed-icon.png" alt="faqClosed" />
                      <p className="text-[#332F66] diodrum-semibold font-size-22 ">
                        {t('faqQuestion')}
                      </p>
                    </div>
                    {openAccordion === 'accordion4' && (
                      <div className="pb-[20px] md:pb-[36px]">
                        <p className="text-[#1E1B3F] text-start pt-[20px] md:pt-[44px] tajawal-medium text-[14px] md:text-[17px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, pariatur laudantium? Amet minima
                          aperiam itaque asperiores perspiciatis ipsam, magni
                          labore dolores. Excepturi, facere. Unde natus at,
                          accusamus porro vitae soluta.
                        </p>
                      </div>
                    )}
                  </button>
                  {/* Add more accordion items as needed */}
                </div>
              )}
              {/* Implement similar structure for other tabs */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
