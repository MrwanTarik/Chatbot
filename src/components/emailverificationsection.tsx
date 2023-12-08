'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function EmailVerificationSection({ lng }: { lng: string }) {
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
    <main>
      <div className=" h-screen bg-auth-bg bg-cover bg-no-repeat flex md:flex-row flex-col flex-nowrap ">
        <div className="h-full w-full md:w-[50%] flex items-center justify-center">
          <Link href="/">
            <img
              src="/img/logo.png"
              className="w-[120px] lg:w-[10.417vw] object-cover"
              alt="ChatbotLogo"
            />
          </Link>
        </div>
        <div className="h-full md:w-[50%] bg-white rounded-t-[15px] flex flex-col justify-center items-center">
          <div className="w-full px-[15px] lg:px-0 lg:w-[29.688vw] h-auto">
            <FadeIn direction="bottom">
              <img
                className="w-[50px] lg:w-[4.688vw] pt-7 sm:pt-0 m-auto "
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
                      className="w-[47px] digit-input focus:outline-none caret-purple  h-[50px] lg:w-[4.167vw] lg:h-[4.167vw] tajawal-medium text-[#1E1B3F] rounded-md bg-[#E2E6EF] font-size-35 text-center flex justify-center items-center"
                      type="text"
                      maxLength={1}
                      ref={index === 0 ? firstInputRef : null}
                      value={digit}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
                </div>
                <Link
                  className="w-full text-white flex items-center tajawal-bold justify-center py-[12px] lg:py-[0.833vw] bg-[#7C32C9] rounded-[10px] mb-[15px] lg:mb-[1.042vw] "
                  href="/sign-up/email-verification/completed-successfully"
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
        <div />
      </div>
    </main>
  );
}
