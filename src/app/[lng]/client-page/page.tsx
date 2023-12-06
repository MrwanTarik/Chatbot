'use client';

import { useTranslation } from '../../i18n/client';
import { LanguageSwitcherClient } from '../languageSwitcher/client';

export const dynamic = 'force-dynamic';

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, 'language-switcher');

  return (
    <>
      <h1>{t('title')}</h1>
      {/* headerQL  i want it dymanic instead of the static */}
      <header>headersssss</header>

      <LanguageSwitcherClient lng={lng} />
    </>
  );
}
