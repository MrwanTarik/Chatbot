import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import { useTranslation } from '../../i18n';
import { languages } from '../../i18n/settings';

interface FooterProps {
  lng: string;
}

export const LanguageSwitcher: React.FC<FooterProps> = async ({ lng }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'language-switcher');

  return (
    <div>
      {/* Use the values prop for passing the lng value */}
      <Trans i18nKey="languageSwitcher" t={t} values={{ lng }}>
        <>
          Switch from <strong>{lng}</strong> to:{' '}
        </>
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => (
          <span key={l}>
            {index > 0 && ' or '}
            <Link href={`/${l}`}>{l === 'ar' ? 'عربي' : 'English'}</Link>
          </span>
        ))}
    </div>
  );
};
