'use client';

// import { useRouter } from 'next/navigation';

import { useTranslation } from '../../i18n/client';
import { LangBase } from './lang-base';

export const LanguageSwitcherClient = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'language-switcher');
  // const router = useRouter();
  return <LangBase t={t} lng={lng} />;
};
