'use client';

import { useTranslation } from '@/app/i18n/client';

// import { useTranslation } from '@/app/i18n/client';

export const dynamic = 'force-dynamic';

export default function Header({ lang }: { lang: string }) {
  // Function to determine if any submenu item is active

  const { t } = useTranslation(lang, '');

  return (
    <>
      {/* <h1>{t('title')}</h1> */}

      <header>header</header>
    </>
  );
}
