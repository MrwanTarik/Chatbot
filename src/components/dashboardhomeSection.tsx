'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdOpenInNew } from 'react-icons/md';

import { useTranslation } from '@/app/i18n/client';

import ChatgptMessage from './chatgptmessage';
import DashboardUserContent from './dashboardusercontent';
import RequestUserCard from './requestuserCard';

interface UserSubject {
  subjectTitle: string;
}

interface DayContent {
  day: string;
  userSubjects: UserSubject[];
}

export default function DashboardHomeSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  // content for user content
  const [content, setContent] = useState<DayContent[]>([
    {
      day: t('day'),
      userSubjects: [
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
      ],
    },
    {
      day: '14/08/2023',
      userSubjects: [
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
        {
          subjectTitle: 'عنوان موضوع يكتب هنا العنوان هنا',
        },
      ],
    },
  ]);
  const [toggle, setToggle] = useState<boolean>(false);
  // handle edit
  const handleEdit = (
    dayIndex: number,
    subjectIndex: number,
    newTitle: string,
  ) => {
    setContent((prevContent) =>
      prevContent.map((day, index) => {
        if (index === dayIndex) {
          return {
            ...day,
            userSubjects: day.userSubjects.map((subject, i) => {
              if (i === subjectIndex) {
                return { ...subject, subjectTitle: newTitle };
              }
              return subject;
            }),
          };
        }
        return day;
      }),
    );
  };
  // Handle delete
  const handleDelete = (dayIndex: number, subjectIndex: number) => {
    setContent((prevContent) => {
      return prevContent.map((dayContent, index) => {
        if (index === dayIndex) {
          return {
            ...dayContent,
            userSubjects: dayContent.userSubjects.filter(
              (_, i) => i !== subjectIndex,
            ),
          };
        }
        return dayContent;
      });
    });
  };
  // handle toggle
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className=" w-[calc(100vw-45px)] lg:w-[calc(100vw-68px)] justify-between ms-auto flex flex-row bg-white py-[20px] h-screen lg:py-[1.5vw] ps-[12px]  lg:ps-[1.875vw] pe-[12px] lg:pe-[2.083vw] gap-x-4">
      <div
        className={`${
          toggle
            ? 'rtl:right-[50px] sm:rtl:right-[65px] ltr:left-[50px] sm:ltr:left-[65px] opacity-100 bg-white'
            : 'rtl:right-[-300px] top-0 ltr:left-[-300px] opacity-0 lg:opacity-100  '
        } w-[250px] sm:w-[40vw] lg:w-[18.854vw] top-0 h-full absolute p-5 lg:p-0 z-20 lg:z-0 transition-opacity ease-in-out duration-300 flex flex-col lg:static`}
      >
        <div>
          <div className=" lg:w-[8.958vw] flex justify-between items-center w-full">
            <img
              className="w-[100px] lg:w-[8.958vw]"
              src="/img/dashboard-logo.png"
              alt="dashboardIcon"
            />
            <div className="block lg:hidden">
              <IoMdClose
                onClick={handleToggle}
                className="text-[20px] cursor-pointer "
              />
            </div>
          </div>
          <button
            type="button"
            className="rounded-[8px] mt-[35px] lg:my-[2vw] mb-[28px] py-[14px] lg:py-[0.885vw] w-full border-2 bg-[#7c32c9] border-solid border-[#7C32C9] flex items-center justify-center"
          >
            <img src="/img/write-icon.png" alt="writeIcon" />
            {/* diordrum needed */}
            <h2 className="ps-[12px] text-white font-size-20 inter-bold">
              موضوع جديد
            </h2>
          </button>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            className="text-[#1E1B3F] block tajawal-bold font-size-22 mb-[10px] lg:mb-[13px]"
            htmlFor="topicSearch"
          >
            قائمة المواضيع
          </label>
          <div className="relative">
            <input
              className="pe-[15px] lg:pe-[45px] ps-[16px] w-full lg:ps-[20px] py-[14px] lg:py-[17px] bg-[#E2E6EF] text-[#1E1B3F] tajawal-medium font-size-16  rounded-lg placeholder:text-[#1E1B3F] placeholder:opacity-50 relative "
              placeholder="بحث في المواضيع..."
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
        </div>
        <div className="flex ak flex-col gap-x-[13px] overflow-y-auto  mt-[0.885vw] grow mb-4">
          {/* diodrum */}
          {content.map((item, dayIndex) => (
            <DashboardUserContent
              key={item.day}
              day={item.day}
              dayIndex={dayIndex} // Pass the dayIndex here
              userSubjects={item.userSubjects}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
        <div className="bg-[#E2E6EF]  rounded-lg pt-[25px] lg:pt-[1.667vw] ps-[15px] lg:ps-[1.25vw] pe-[15px] lg:pe-[1.667vw] pb-[21px] lg:pb-[1.094vw]">
          <h2 className="font-size-20 tajawal-bold text-[#332F66] text-center">
            لازلت في حيرة من امرك؟
          </h2>
          <Link
            className="text-white flex gap-x-[12px] mt-[18px] inter-regular font-size-17 font-bold bg-[#332F66] rounded-lg pt-[13px] lg:pt-[0.885vw] ps-[35px] lg:ps-[2.24vw] pe-[10px] lg:pe-[1.927vw] pb-[14px] pb-[0.885vw]"
            href="/"
          >
            <img src="/img/contact-icon.svg" alt="contactIcon" />
            تواصل مباشر مع مساعد
          </Link>
        </div>
      </div>

      <div className="rounded-[12px] lg:rounded-[30px] flex flex-col bg-[#E2E6EF] w-full lg:w-[71.979vw] py-[20px] lg:pb-[30px] lg:pt-[50px] px-[15px] sm:px-[30px] lg:px-[55px]">
        <button
          onClick={handleToggle}
          type="button"
          className="flex items-start mb-4  lg:hidden"
        >
          <MdOpenInNew className="text-[black] text-[24px] rtl:rotate-180 ltr:rotate-90" />
        </button>
        <div className="flex-1 overflow-y-auto ak mb-[30px] lg:mb-[50px]">
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
  );
}
