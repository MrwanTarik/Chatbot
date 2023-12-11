import { t } from 'i18next';
import React from 'react';

export default function ChatgptMessage() {
  return (
    <div className="bg-white chat-holder flex items-start gap-x-[15px] lg:gap-x-[25px] ">
      <div>
        <img
          className="min-w-[30px] pt-2 lg:pt-0 lg:w-[74px]"
          src="/img/chat-image.svg"
          alt="ChatImage"
        />
      </div>
      <div>
        <h1 className="chatgpt-prompt">{t('chatbot')}</h1>
        <div className="chatbot-content">
          <p>
            يمكن تجديد رخصة القيادة في المملكة العربية السعودية إلكترونيًا من
            خلال منصة أبشر، أو من خلال مكاتب المرور. التجديد الإلكتروني
          </p>
          <h2>المتطلبات:</h2>
          <ul>
            <li>أن تكون الرخصة سارية المفعول.</li>
            <li>تسديد المخالفات المرورية.</li>
            <li>وجود بصمة وصورة لصاحب الرخصة في أبشر.</li>
          </ul>
          <h2>الخطوات:</h2>
          <ol>
            <li>الدخول إلى منصة أبشر.</li>
            <li>تحديد نوع الرخصة.</li>
            <li>تحديد نوع الرخصة.</li>
            <li>تحديد نوع الرخصة.</li>
            <li>تحديد نوع الرخصة.</li>
            <li>تحديد مدة التجديد (سنة أو خمس سنوات).</li>
            <li>سداد الرسوم.</li>
            <li>طباعة الرخصة الجديدة.</li>
          </ol>
          <p>التجديد من خلال مكاتب المرور</p>
        </div>
        <div className="flex items-center gap-x-[15px] mt-[20px] lg:mt-[32px]">
          <span className="cursor-pointer">
            <img
              className="w-[14px] lg:w-[20px]"
              src="/img/thumb-up.svg"
              alt="thumb-up"
            />
          </span>
          <span className="cursor-pointer">
            <img
              className="w-[14px] lg:w-[20px]"
              src="/img/thumb-down.svg"
              alt="thumb-up"
            />
          </span>
          <span className="cursor-pointer">
            <img
              className="w-[14px] lg:w-[20px]"
              src="/img/reload-icon.png"
              alt="reloadIcon"
            />
          </span>
          <span className="cursor-pointer">
            <img
              className="w-[14px] lg:w-[20px]"
              src="/img/thumb-down.svg"
              alt="thumb-up"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
