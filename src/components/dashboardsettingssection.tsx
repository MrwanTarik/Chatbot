'use client';

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { useTranslation } from '@/app/i18n/client';

import FadeIn from './fadescroll';

export default function DashboardSettingsSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const [uploadImageModel, setUploadImageModel] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const fileInputRef = useRef<any>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    '/img/profile-placeholder.png',
  );
  const [languageIsOpen, setLanguageIsOpen] = useState(false);
  const [selectedLanguageText, setSelectedLanguageText] =
    useState('اللغه العربية');
  // change the language text
  const handleLanguageTextChange = (text: string) => {
    setSelectedLanguageText(text);
    setLanguageIsOpen(false);
  };
  // open the model
  const handleModelOpen = () => {
    setUploadImageModel(true);
  };
  // close the model
  const handleModelClose = () => {
    setUploadImageModel(false);
  };

  // save the uploaded file in state
  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file); // Store the file but don't set the preview yet
    }
  };

  // save the image preview url in state
  const handleSaveChangesClick = () => {
    if (uploadedFile) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result); // Update the image preview here
      };
      reader.readAsDataURL(uploadedFile);
    }
    setUploadImageModel(false);
  };
  // remove the file from state
  const handleRemoveFile = () => {
    setUploadedFile(null);
    setImagePreviewUrl('/img/profile-placeholder.png'); // Reset to placeholder image
  };
  // trigger the hidden input click event
  const handleFileUploadClick = () => {
    fileInputRef.current?.click(); // Using optional chaining to avoid null values
  };
  return (
    <div className=" w-[calc(100vw-45px)] lg:w-[calc(100vw-68px)] ms-auto bg-white  h-screen  ps-[12px]  lg:ps-[1.875vw] pe-[12px] lg:pe-[2.083vw]">
      <button
        type="button"
        onClick={handleModelClose}
        aria-label="Close"
        className={`absolute top-0 left-0 w-full h-full bg-[#1E1B3F] z-10  transition-all duration-500 ${
          uploadImageModel ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
      />
      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full lg:max-w-[33%] bg-white rounded-[30px] z-20 ${
          uploadImageModel ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="py-[20px] lg:pt-[40px] lg:pb-[7.87vh]">
          <button
            type="button"
            onClick={handleModelClose}
            className="flex justify-end pb-[15px] px-[25px] lg:px-[39px] lg:pb-[25px]"
          >
            <img src="/img/model-close.svg" alt="ModelClose" />
          </button>
          <div className="px-[50px] lg:px-[70px]">
            <FadeIn direction="bottom">
              <h2 className="text-[#7C32C9] text-center  lg:text-start pb-[20px] lg:pb-[30px] font-size-25 diodrum-semibold">
                {t('changeAccountPhoto')}
              </h2>
            </FadeIn>
            <input
              placeholder="Upload Image"
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              className="hidden"
              accept="image/*"
            />

            <button
              type="button"
              onClick={handleFileUploadClick}
              className="border-[1px] w-full lg:w-auto border-dashed border-[#1E1B3F] bg-[#E2E6EF] rounded-[10px] py-[30px] lg:py-[45px] gap-y-[15px] 2xl:gap-y-[0] flex flex-col 2xl:flex-row xl:gap-x-[20px] px-[40px] lg:px-[40px] items-center justify-center"
            >
              <img
                className="w-[50px] h-[50px]"
                src="/img/upload-pic-icon.png"
                alt="uploadImageIcon"
              />
              <div className="flex flex-col gap-y-[5px] items-center">
                <FadeIn>
                  <p className="text-[#1E1B3F] text-center 2xl:text-start tajawal-medium font-size-16">
                    {t('pickImageToUpload')}
                  </p>
                </FadeIn>
                <FadeIn>
                  <p className="text-[#1E1B3F] text-center 2xl:text-start tajawal-medium text-[12px]">
                    {t('imageSupportedSize')}
                  </p>
                </FadeIn>
              </div>
            </button>
            {uploadedFile && (
              <div className="flex flex-col md:flex-row justify-between items-center py-[9px] mt-[10px] mb-[30px]">
                <FadeIn>
                  <p className="flex file-text items-center gap-x-[5px] tajawal-medium font-size-12 text-[#1E1B3F] lg:gap-x-[9px]">
                    <img src="/img/fileuploaded-icon.svg" alt="fileUploaded" />{' '}
                    <span> {uploadedFile.name} </span>
                  </p>
                </FadeIn>
                <FadeIn>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="flex remove-btn items-center tajawal-medium font-size-12 text-[#1E1B3F] gap-x-[5px] cursor-pointer"
                  >
                    <img
                      className="w-[18px]"
                      src="/img/remove-icon.png"
                      alt="Remove file"
                    />{' '}
                    <span> {t('remove')} </span>
                  </button>
                </FadeIn>
              </div>
            )}
            <div className="flex flex-col gap-y-[10px] md:flex-row items-center gap-x-[25px] lg:gap-x-[35px] mt-[30px] ">
              <button
                type="button"
                onClick={handleSaveChangesClick}
                className="w-full max-w-[212px] rounded-[8px] py-[13px] lg:py-[17px] bg-[#7C32C9] font-size-20 tajawal-bold text-[white]  flex items-center justify-center gap-x-[10px] lg:gap-x-[15px]"
              >
                <img
                  className="w-[25px] lg:w-[30px] ltr:rotate-180 rtl:rotate-0"
                  src="/img/uploadhere-icon.svg"
                  alt="sendIcon"
                />
                {t('saveChanges')}{' '}
              </button>
              <button
                onClick={handleModelClose}
                type="button"
                className="font-size-20 diodrum-semibold text-[#1E1B3F]"
              >
                {t('Cancel')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full pb-[20px]  lg:pb-[40px] ">
        <div className="flex pt-[30px] lg:pt-[2vw] mb-[40px] lg:mb-[60px]">
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
              <p className="text-[#29B3B4] settings-icon tajawal-bold text-[25px] flex items-center gap-x-[13px] lg:gap-x-[18px] lg:text-[35px]">
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M23.2727 15.5997C22.7231 14.9075 22.4228 14.0543 22.4193 13.1748C22.4158 12.2954 22.7092 11.4398 23.2532 10.7434C24.0331 9.74719 24.1859 8.46996 23.654 7.41616C23.5367 7.18515 23.4116 6.9565 23.2785 6.73023C23.1653 6.53669 23.0449 6.346 22.9224 6.16099C22.5813 5.65217 22.0995 5.25064 21.5341 5.00406C20.9688 4.75749 20.3436 4.67623 19.7329 4.76992C18.851 4.89338 17.9526 4.72363 17.1792 4.28741C16.4059 3.85119 15.8015 3.17331 15.4615 2.36062C14.9692 1.18372 13.8823 0.414542 12.6274 0.351926C12.1891 0.330579 11.7437 0.331291 11.2961 0.351926C10.0311 0.4181 8.94271 1.19724 8.45617 2.38553C8.12341 3.20008 7.5255 3.88213 6.75668 4.32416C5.98787 4.76619 5.0919 4.94304 4.21001 4.82684C2.91692 4.65892 1.69663 5.20966 1.0162 6.26275C0.755395 6.66604 0.517644 7.08342 0.304065 7.51293C-0.221389 8.56531 -0.0563284 9.83471 0.725726 10.8266C1.27608 11.5183 1.57726 12.3714 1.5817 13.251C1.58614 14.1305 1.29358 14.9865 0.750233 15.6836C-0.0332635 16.6798 -0.186791 17.9563 0.345871 19.008C0.463359 19.2414 0.588055 19.4698 0.721401 19.696C0.834565 19.8896 0.954936 20.0796 1.08179 20.2653C1.77375 21.302 2.99621 21.8307 4.27056 21.6578C5.15234 21.5344 6.05065 21.7041 6.82397 22.1402C7.5973 22.5762 8.20169 23.2539 8.54195 24.0664C9.03425 25.2433 10.1212 26.0131 11.3761 26.0758C11.5923 26.0857 11.8086 26.09 12.0183 26.09C12.2497 26.09 12.4803 26.0843 12.7074 26.0729C13.9709 26.0089 15.0593 25.2304 15.5487 24.04C15.8818 23.2264 16.4794 22.5452 17.2476 22.1035C18.0157 21.6618 18.9108 21.4848 19.792 21.6001C21.1002 21.7709 22.3054 21.2166 22.9858 20.1642C23.2464 19.761 23.4844 19.3438 23.6987 18.9148C24.2198 17.8602 24.0569 16.5908 23.2727 15.5997ZM13.7439 16.1689C13.1517 16.5094 12.4706 16.669 11.7866 16.6274C11.1026 16.5858 10.4465 16.3448 9.9012 15.9351C9.35591 15.5254 8.94594 14.9652 8.72315 14.3255C8.50035 13.6857 8.47474 12.9951 8.64954 12.341C8.82435 11.6868 9.19172 11.0986 9.7052 10.6506C10.2187 10.2026 10.8552 9.91493 11.5343 9.82405C12.2134 9.73316 12.9045 9.84311 13.5203 10.14C14.136 10.4369 14.6488 10.9073 14.9937 11.4919C15.4562 12.2757 15.5844 13.2088 15.35 14.0859C15.1156 14.963 14.5378 15.7123 13.7439 16.1689Z"
                    fill="#CFC6D8"
                  />
                </svg>{' '}
                {t('tickets')}
              </p>
            </FadeIn>
          </div>
        </div>
        <form
          action=""
          className="ak flex-1 flex flex-col  overflow-y-auto h-full"
        >
          <div className=" flex flex-col lg:pe-[10px]  lg:flex-row  gap-[20px] lg:gap-x-[40px] lg:gap-y-0 items-start mb-[20px]">
            <div className="w-full h-full lg:w-[31.33%] flex flex-col items-center px-[30ox] lg:px-[65px] bg-[#E2E6EF] rounded-[16px] lg:rounded-[30px]">
              <FadeIn direction="bottom">
                <h2 className="text-[#7C32C9] diodrum-semibold font-size-25 text-center pt-[40px] lg:pt-[71px]">
                  {t('accountPhoto')}
                </h2>
              </FadeIn>
              <div className="pb-[30px] lg:pb-[55px]">
                <img
                  className="mt-[30px] lg:mt-[2.5vw] bg-white p-[6px] w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] 2xl:w-[293px] 2xl:h-[293px] rounded-[50%] object-cover"
                  src={imagePreviewUrl}
                  alt="profileImage"
                />
              </div>
              <div className="flex flex-col gap-y-[20px] lg:gap-y-[30px] pb-[30px] lg:pb-[64px]">
                <button
                  onClick={handleModelOpen}
                  type="button"
                  className="flex items-center gap-x-[10px] lg:gap-x-[15px] transition-all duration-500"
                >
                  <img
                    className="w-[24px] object-cover"
                    src="/img/change-pic-icon.png"
                    alt="changeIcon"
                  />
                  <p className="text-[#1E1B3F] diodrum-medium font-size-20">
                    {t('changePhoto')}
                  </p>
                </button>
                <button
                  onClick={handleRemoveFile}
                  type="button"
                  className="flex items-center gap-x-[10px] lg:gap-x-[15px]"
                >
                  <img
                    className="w-[24px] object-cover"
                    src="/img/remove-icon.png"
                    alt="changeIcon"
                  />
                  <p className="text-[#DE5858] diodrum-medium font-size-20">
                    {t('removephoto')}
                  </p>
                </button>
              </div>
            </div>
            <div className="w-full h-full lg:w-[34.33%] flex flex-col items-center px-[20px] lg:px-[3vw] bg-[#E2E6EF] rounded-[16px] lg:rounded-[30px] pb-[64px]">
              <FadeIn direction="bottom">
                <h2 className="text-[#7C32C9] w-full diodrum-semibold font-size-25 text-start pt-[40px] lg:pt-[71px] pb-[25px] lg:pb-[50px]">
                  {t('accountInfo')}
                </h2>
              </FadeIn>
              <div className="flex flex-col w-full gap-y-[20px] lg:gap-y-[35px]">
                <div className="w-full relative ">
                  <input
                    className="font-size-18 w-full tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[white] rounded-[10px] ps-[45px] lg:ps-[3.125vw] placeholder:text-[#1E1B3F]"
                    type="text"
                    placeholder={t('settingName')}
                    name="userName"
                    id="userName"
                  />
                  <span>
                    <img
                      className="w-[18px]  lg:w-[1.25vw] absolute top-[50%] translate-y-[-50%] rtl:right-[15px] ltr:left-[15px] rtl:lg:right-[1.198vw] ltr:lg:left-[1.198vw] "
                      src="/img/profile-name-icon.png"
                      alt="emailIcon"
                    />
                  </span>
                </div>
                <div className="w-full relative ">
                  <input
                    className="font-size-18 w-full tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[white] rounded-[10px] ps-[45px] lg:ps-[3.125vw] placeholder:text-[#1E1B3F]"
                    type="email"
                    placeholder="ahmed@Email.com"
                    name="userEmail"
                    id="userEmail"
                  />
                  <span>
                    <img
                      className="w-[18px]  lg:w-[1.25vw] absolute top-[50%] translate-y-[-50%] rtl:right-[15px] ltr:left-[15px] rtl:lg:right-[1.198vw] ltr:lg:left-[1.198vw] "
                      src="/img/email-icon.svg"
                      alt="emailIcon"
                    />
                  </span>
                </div>
                <div className="w-full relative">
                  <input
                    className={`font-size-18 w-full  tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[white] rounded-[10px] ps-[45px] lg:ps-[3.125vw] placeholder:text-[#1E1B3F] ${
                      lng === 'ar' ? 'tele-input' : ''
                    }`}
                    type="tel"
                    placeholder="+966213513212"
                    name="userPhone"
                    id="userPhone"
                  />
                  <span>
                    <img
                      className="w-[18px]  lg:w-[1.25vw] absolute top-[50%] translate-y-[-50%] rtl:right-[15px] ltr:left-[15px] lg:right-[1.198vw] ltr:rotate-90 rtl:rotate-0"
                      src="/img/phone-icon.png"
                      alt="emailIcon"
                    />
                  </span>
                </div>
                <div className="w-full relative">
                  <button
                    onClick={() => setLanguageIsOpen((prev) => !prev)}
                    type="button"
                    className={`w-full p-[15px] lg:py-[1.302vw]  bg-white lg:px-[18px] flex items-center justify-between text-[#1E1B3F] tajawal-medium font-size-16 placeholder:text-[#1E1B3F]  placeholder:opacity-50${
                      languageIsOpen
                        ? 'rounded-none rounded-t-lg '
                        : ' rounded-[10px]'
                    }`}
                  >
                    <p className="flex gap-x-[10px] font-size-18 items-center lg:gap-x-[15px]">
                      {' '}
                      <img
                        src="/img/language-icon.svg"
                        alt="languageIcon"
                      />{' '}
                      {t(selectedLanguageText)}
                    </p>
                    {!languageIsOpen ? <FaArrowDown /> : <FaArrowUp />}
                  </button>
                  {languageIsOpen && (
                    <div className="absolute z-20 left-0 w-full list-none bg-white flex flex-col items-start  ">
                      <button
                        type="button"
                        onKeyDown={(e) =>
                          e.key === 'Enter' &&
                          handleLanguageTextChange('arabicLanguage')
                        }
                        onClick={() =>
                          handleLanguageTextChange('arabicLanguage')
                        }
                        className="text-[#1E1B3F] w-full flex gap-x-[10px] lg:gap-x-[15px] text-start tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                      >
                        <img src="/img/language-icon.svg" alt="languageIcon" />
                        {t('arabicLanguage')}
                      </button>
                      <button
                        type="button"
                        onKeyDown={(e) =>
                          e.key === 'Enter' &&
                          handleLanguageTextChange('englishLanguage')
                        }
                        onClick={() =>
                          handleLanguageTextChange('englishLanguage')
                        }
                        className="text-[#1E1B3F] flex gap-x-[10px]  text-start w-full tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                      >
                        <img src="/img/language-icon.svg" alt="languageIcon" />
                        {t('englishLanguage')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-full lg:w-[34.33%] flex flex-col items-center px-[20px] lg:px-[3vw] bg-[#E2E6EF] rounded-[16px] lg:rounded-[30px] pb-[64px]">
              <FadeIn direction="bottom">
                <h2 className="text-[#7C32C9] w-full diodrum-semibold font-size-25 text-start pt-[40px] lg:pt-[71px] pb-[25px] lg:pb-[50px]">
                  {t('passwordChange')}
                </h2>
              </FadeIn>
              <div className="flex flex-col w-full gap-y-[20px] lg:gap-y-[35px]">
                <div className="w-full relative ">
                  <input
                    className="font-size-18 w-full tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[white] rounded-[10px] ps-[45px] pe-[45px] lg:pe-[3.125vw] lg:ps-[3.125vw] placeholder:text-[#1E1B3F]"
                    type="password"
                    placeholder={t('currentUserPassword')}
                    name="currentUserPassword"
                    id="currentUserPassword"
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
                <div className="w-full relative ">
                  <input
                    className="font-size-18 w-full tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[white] rounded-[10px] ps-[45px] pe-[45px] lg:pe-[3.125vw] lg:ps-[3.125vw] placeholder:text-[#1E1B3F]"
                    type="password"
                    placeholder={t('newPasswordInputPlaceholder')}
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
                <div className="w-full relative ">
                  <input
                    className="font-size-18 w-full tajawal-medium text-[#1E1B3F] py-[15px] lg:py-[1.302vw] bg-[white] rounded-[10px] ps-[45px] pe-[45px] lg:pe-[3.125vw] lg:ps-[3.125vw] placeholder:text-[#1E1B3F]"
                    type="password"
                    placeholder={t('confirmNewPasswordInputPlaceholder')}
                    name="userConfirmPassword"
                    id="userConfirmPassword"
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
              </div>
              <p className=" py-[20px] w-full lg:py-[35px] text-[#332F66] tajawal-medium font-size-18">
                {t('forgotPassword')}
              </p>
              <div className="flex w-full items-center gap-x-[25px] lg:gap-x-[35px]">
                <button
                  type="button"
                  className="bg-transparent font-size-20 border-[3px] diodrum-bold border-solid border-[#7C32C9] rounded-[10px] text-[#7C32C9] py-[12px] lg:py-[16px] px-[16px] lg:px-[60px]  "
                >
                  {t('changeNow')}
                </button>
                <button
                  type="button"
                  className="text-[#1E1B3F] diodrum-semibold font-size-20"
                >
                  {t('Cancel')}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-y-[10px] md:flex-row items-center gap-x-[25px] lg:gap-x-[35px] mt-[30px] ">
          <Link
            className="w-full max-w-[279px] rounded-[10px] py-[12px] bg-[#7C32C9] font-size-20 diodrum-bold text-[white]  lg:py-[16px] flex items-center justify-center gap-x-[10px] lg:gap-x-[15px]"
            href="/dashboard-tickets/add-ticket/ticket-added"
          >
            <img
              className="w-[25px] lg:w-[30px] ltr:rotate-180 rtl:rotate-0"
              src="/img/save-icon.png"
              alt="sendIcon"
            />
            {t('saveChanges')}{' '}
          </Link>
          <Link
            className="font-size-20 diodrum-semibold text-[#1E1B3F]"
            href="/dashboard-tickets"
          >
            {t('Cancel')}
          </Link>
        </div>
      </div>
    </div>
  );
}
