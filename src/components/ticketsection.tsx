'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { useTranslation } from '@/app/i18n/client';

import UserTicket from './userticket';

export default function TicketSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  // active pagination
  const [activePagination, setActivePagination] = useState(1);
  const [recentIsOpen, setrecentIsOpen] = useState(false);
  const [selectedRecentText, setSelectedRecentText] = useState('recent');
  const [showIsOpen, setShowIsOpen] = useState(false);
  const [selectedShowText, setSelectedShowText] = useState('showOne');
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedFilterText, setSelectedFilterText] = useState('all');
  // handle Recent text change
  const handleRecentTextChange = (text: string) => {
    setSelectedRecentText(text);
    setrecentIsOpen(false);
  };
  // handle Show text change
  const handleShowTextChange = (text: string) => {
    setSelectedShowText(text);
    setShowIsOpen(false);
  };
  // handle Filter text change
  const handleFilterTextChange = (text: string) => {
    setSelectedFilterText(text);
    setFilterIsOpen(false);
  };
  // handle active pagination

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
            <button
              type="button"
              className="rounded-[8px]  px-[10px] lg:px-[36px] mt-[35px] lg:my-[2vw] mb-[28px] py-[14px] lg:py-[0.885vw] w-full border-2 bg-[#7c32c9] border-solid border-[#7C32C9] flex items-center justify-center"
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
            </button>
          </div>
        </div>
        <div className=" flex-1 flex flex-col ak overflow-y-auto px-[12px] py-[25px]  lg:py-[36px] lg:px-[45px] bg-[#E2E6EF] rounded-[30px]">
          <div className="flex justify-between items-center flex-col lg:flex-row gap-y-4 lg:gap-y-0">
            <div className="relative w-[100%] lg:w-[60%]">
              <input
                className="pe-[15px] lg:pe-[45px] ps-[16px] w-full lg:ps-[20px] py-[14px] lg:py-[17px] bg-white text-[#1E1B3F] tajawal-medium font-size-16  rounded-lg placeholder:text-[#1E1B3F] placeholder:opacity-50 relative "
                placeholder={t('ticketsSearch')}
                id="topicSearch"
                type="text"
                name="topic"
              />
              <span className="w-[16px] lg:w-[22px] absolute top-2/4 translate-y-[-50%] rtl:left-[10px] rtl:lg:left-[0.806vw] ltr:right-[10px] ltr:lg:right-[0.806vw]  ">
                <img
                  className="w-full"
                  src="/img/search-icon.png"
                  alt="searchIcon"
                />
              </span>
            </div>
            <div className="flex items-start w-full gap-x-[15px] lg:gap-x-[30px] lg:w-[38%]">
              <div className="relative  w-[33%] lg:w-[33%]">
                <button
                  onClick={() => setrecentIsOpen((prev) => !prev)}
                  type="button"
                  className={`w-full py-[14px] lg:py-[17px] px-[15px] bg-white lg:px-[18px] flex items-center justify-between  text-[#1E1B3F] tajawal-medium font-size-16  placeholder:text-[#1E1B3F] placeholder:opacity-50 ${
                    recentIsOpen ? 'rounded-none rounded-t-lg ' : 'rounded-lg'
                  }`}
                >
                  {t(selectedRecentText)}
                  {!recentIsOpen ? <FaArrowDown /> : <FaArrowUp />}
                </button>
                {recentIsOpen && (
                  <ul className="absolute z-20 left-0 w-full list-none bg-white flex flex-col items-start  ">
                    <button
                      type="button"
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleRecentTextChange('recent')
                      }
                      onClick={() => handleRecentTextChange('recent')}
                      className="text-[#1E1B3F] w-full text-start tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('recent')}
                    </button>
                    <button
                      type="button"
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleRecentTextChange('old')
                      }
                      onClick={() => handleRecentTextChange('old')}
                      className="text-[#1E1B3F] text-start w-full tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('old')}
                    </button>
                  </ul>
                )}
              </div>
              <div className="relative  w-[33%] lg:w-[33%]">
                <button
                  onClick={() => setShowIsOpen((prev) => !prev)}
                  type="button"
                  className={`w-full py-[14px]  lg:py-[17px] px-[15px] bg-white lg:px-[18px] flex items-center justify-between  text-[#1E1B3F] tajawal-medium font-size-16  placeholder:text-[#1E1B3F] placeholder:opacity-50 ${
                    showIsOpen ? 'rounded-none rounded-t-lg ' : 'rounded-lg'
                  }`}
                >
                  {t(selectedShowText)}
                  {!showIsOpen ? <FaArrowDown /> : <FaArrowUp />}
                </button>
                {showIsOpen && (
                  <ul className="absolute z-20 left-0 w-full list-none bg-white   ">
                    <button
                      type="button"
                      onClick={() => handleShowTextChange('showOne')}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleShowTextChange('showOne')
                      }
                      className="text-[#1E1B3F] w-full text-start tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('showOne')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShowTextChange('showTwo')}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleShowTextChange('showTwo')
                      }
                      className="text-[#1E1B3F] w-full text-start tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('showTwo')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShowTextChange('showThree')}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleShowTextChange('showThree')
                      }
                      className="text-[#1E1B3F] w-full text-start tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('showThree')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShowTextChange('showThree')}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleShowTextChange('showThree')
                      }
                      className="text-[#1E1B3F] w-full text-start tajawal-medium transition-all  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('showFour')}
                    </button>
                  </ul>
                )}
              </div>
              <div className="relative  w-[33%] lg:w-[33%]">
                <button
                  onClick={() => setFilterIsOpen((prev) => !prev)}
                  type="button"
                  className={`w-full py-[14px] lg:py-[17px] px-[15px] bg-white lg:px-[18px] flex items-center justify-between  text-[#1E1B3F] tajawal-medium font-size-16  placeholder:text-[#1E1B3F] placeholder:opacity-50 ${
                    filterIsOpen ? 'rounded-none rounded-t-lg ' : 'rounded-lg'
                  }`}
                >
                  {t(selectedFilterText)}
                  {!filterIsOpen ? <FaArrowDown /> : <FaArrowUp />}
                </button>
                {filterIsOpen && (
                  <ul className="absolute z-20 left-0 w-full list-none bg-white   ">
                    <button
                      onClick={() => handleFilterTextChange('all')}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleFilterTextChange('all')
                      }
                      type="button"
                      className="text-[#1E1B3F] tajawal-medium transition-all w-full text-start  duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('all')}
                    </button>
                    <button
                      onClick={() => handleFilterTextChange('open')}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleFilterTextChange('open')
                      }
                      type="button"
                      className="text-[#1E1B3F] tajawal-medium transition-all w-full text-start duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('open')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleFilterTextChange('closed')}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleFilterTextChange('closed')
                      }
                      className="text-[#1E1B3F] tajawal-medium transition-all w-full text-start duration-75 font-size-16 py-[10px] lg:py-[12px] px-[15px] lg:px-[18px] active:text-white active:bg-[#7C32C9]"
                    >
                      {t('closed')}
                    </button>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 ak overflow-y-auto mt-[30px]  ">
            <div className="grid ltr:ps-[10px] rtl:pe-[10px] grid-cols-1 2xl:grid-cols-2 gap-[30px] lg:gap-x-[60px]">
              <UserTicket />
              <UserTicket />
              <UserTicket />
              <UserTicket />
              <UserTicket />
              <UserTicket />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between pt-[15px] lg:pt-[20px] ">
              <div className="flex flex-1 justify-between items-center sm:hidden">
                <Link
                  href="/"
                  className="bg-white text-[#1E1B3F]  px-[10px] py-[8px] text-[16px] rounded-md tajawal-bold"
                >
                  Previous
                </Link>
                <Link
                  href="/"
                  className="bg-white text-[#1E1B3F]  px-[10px] py-[8px] text-[16px] rounded-md tajawal-bold"
                >
                  Next
                </Link>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
                <div>
                  <div
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm sm:gap-x-[10px]"
                    aria-label="Pagination"
                  >
                    <Link
                      href="/"
                      className="relative h-[40px] w-[40px] justify-center inline-flex items-center bg-white rounded-md p-2  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon
                        className="text-[16px] text-[#1E1B3F] rtl:rotate-180 ltr:rotate-0"
                        aria-hidden="true"
                      />
                    </Link>
                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: " ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                    <Link
                      onClick={() => setActivePagination(1)}
                      href="/"
                      aria-current="page"
                      className={`relative w-[40px] justify-center h-[40px] tajawal-bold  text-[16px] z-10 inline-flex items-center  rounded-md  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        activePagination === 1
                          ? 'bg-[#7C32C9] text-white'
                          : 'bg-white text-[#1E1B3F]'
                      }`}
                    >
                      1
                    </Link>
                    <Link
                      onClick={() => setActivePagination(2)}
                      href="/"
                      className={`relative w-[40px] justify-center h-[40px] tajawal-bold  text-[16px] z-10 inline-flex items-center  rounded-md  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        activePagination === 2
                          ? 'bg-[#7C32C9] text-white'
                          : 'bg-white text-[#1E1B3F]'
                      }`}
                    >
                      2
                    </Link>
                    <Link
                      onClick={() => setActivePagination(3)}
                      href="/"
                      className={`relative w-[40px] justify-center h-[40px] tajawal-bold  text-[16px] z-10 inline-flex items-center  rounded-md  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        activePagination === 3
                          ? 'bg-[#7C32C9] text-white'
                          : 'bg-white text-[#1E1B3F]'
                      }`}
                    >
                      3
                    </Link>
                    <span className="relative w-[40px] h-[40px] justify-center tajawal-bold  text-[16px] inline-flex items-center bg-white text-[#1E1B3F]  rounded-md  ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                      ..
                    </span>
                    <Link
                      onClick={() => setActivePagination(8)}
                      href="/"
                      className={`relative w-[40px] justify-center h-[40px] tajawal-bold  text-[16px] z-10 inline-flex items-center  rounded-md  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        activePagination === 8
                          ? 'bg-[#7C32C9] text-white'
                          : 'bg-white text-[#1E1B3F]'
                      }`}
                    >
                      8
                    </Link>
                    <Link
                      href="/"
                      onClick={() => setActivePagination(9)}
                      className={`relative w-[40px] justify-center h-[40px] tajawal-bold  text-[16px] z-10 inline-flex items-center  rounded-md  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        activePagination === 9
                          ? 'bg-[#7C32C9] text-white'
                          : 'bg-white text-[#1E1B3F]'
                      }`}
                    >
                      9
                    </Link>
                    <a
                      onClick={() => setActivePagination(10)}
                      href="/"
                      className={`relative w-[40px] justify-center h-[40px] tajawal-bold  text-[16px] z-10 inline-flex items-center  rounded-md  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        activePagination === 9
                          ? 'bg-[#7C32C9] text-white'
                          : 'bg-white text-[#1E1B3F]'
                      }`}
                    >
                      10
                    </a>
                    <Link
                      href="/"
                      className="relative w-[40px] h-[40px]  tajawal-bold  text-[16px] inline-flex items-center bg-white text-[#1E1B3F] rounded-md p-2  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon
                        className=" text-[16px] rtl:rotate-180 ltr:rotate-0 text-[#1E1B3F]"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
