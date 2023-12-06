'use client';

import { useTranslation } from '@/app/i18n/client';

export default function Footer({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  return <footer>footer</footer>;
}
