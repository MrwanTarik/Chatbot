'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function ForgetPasswordSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  // Assuming a 6-digit code
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState(new Array(6).fill(''));

  useEffect(() => {
    // Focusing the first input element when the component mounts
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    // Auto-focus next input on entry
    if (element.value && element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    // Handle backspace for empty input
    if (event.key === 'Backspace' && code[index] === '') {
      event.preventDefault(); // Prevent from leaving the input

      // Focus the previous input
      const previousInput = event.currentTarget
        .previousElementSibling as HTMLInputElement | null;
      if (previousInput && index > 0) {
        // Clear the value in the previous input
        const newCode = [...code];
        newCode[index - 1] = '';
        setCode(newCode);

        // Move the focus to the previous input
        previousInput.focus();
      }
    }
  };
  return (
    <div className="bg-auth-bg bg-cover bg-no-repeat h-screen py-20 lg:py-[5.521vw] flex justify-center items-center px-4">
      <div className="w-full lg:w-[38.125vw] relative bg-white px-[25px] lg:px-[2.969vw] py-[30px] lg:py-[3.229vw] flex items-center justify-start h-full rounded-[15px]">
        <Link
          className="absolute rtl:right-[25px] rtl:lg:right-[2.969vw] ltr:left-[25px] ltr:lg:left-[2.969vw] top-[30px] lg:top-[2.5vw] w-[25px] lg:w-[2.083vw]"
          href="/sign-in/forget-password"
        >
          <img
            className="ltr:rotate-180"
            src="/img/back-icon.svg"
            alt="backIcon"
          />
        </Link>
        <div className="w-full">
          <FadeIn direction="bottom">
            <img
              className="w-[50px] lg:w-[4.688vw] pt-5 sm:pt-0 m-auto "
              src="/img/security-icon.png"
              alt="securityIcon"
            />
          </FadeIn>
          <FadeIn direction="top">
            <h1 className="diodrum-semibold text-purple pt-[15px] md:pt-[0] mb-4 lg:mb-[1.042vw] text-center font-size-40">
              {t('verifyYourAccount')}
            </h1>
          </FadeIn>
          <FadeIn direction="top">
            <p className="font-size-22 tajawal-medium text-[#1E1B3F] mb-6 lg:mb-[2.083vw] text-center">
              {t('enterTheCode')}
            </p>
          </FadeIn>
          <form action="">
            <div className="flex flex-col">
              <div className="flex justify-center gap-x-[13px] lg:gap-x-[1.823vw] max-w-[100%] mb-[25px] lg:mb-[1.823vw]">
                {code.map((digit, index) => (
                  <input
                    dir="ltr"
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="w-[42px] digit-input focus:outline-none caret-purple  h-[50px] lg:w-[4.167vw] lg:h-[4.167vw]  tajawal-medium text-[#1E1B3F] rounded-md bg-[#E2E6EF] font-size-35 text-center flex justify-center items-center"
                    type="text"
                    ref={index === 0 ? firstInputRef : null}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <Link
                className="w-full text-white flex items-center tajawal-bold justify-center py-[12px] lg:py-[0.833vw] bg-[#7C32C9] rounded-[10px] mb-[15px] lg:mb-[1.042vw] "
                href="/sign-in/forget-password/change-password"
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
                  {t('didntGetCode')}
                </p>
                <Link
                  href="/sign-in"
                  className="text-[#1E1B3F] tajawal-bold ps-[2px] font-size-20 "
                >
                  {t('resedCode')}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
