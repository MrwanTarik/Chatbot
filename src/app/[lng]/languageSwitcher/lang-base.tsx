import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Trans } from 'react-i18next/TransWithoutContext';

import { languages } from '../../i18n/settings';

export const LangBase = ({ t, lng }: { t: any; lng: string }) => {
  const path = usePathname();

  // A function to handle path replacement for different language codes, now with explicit types
  const getLocalizedPath = (
    currentLng: string,
    newLng: string,
    currentPath: string,
  ) => {
    // If the path is just the language code or followed by a slash, replace it with the new language code
    if (
      currentPath === `/${currentLng}` ||
      currentPath.startsWith(`/${currentLng}/`)
    ) {
      return `/${newLng}${currentPath.substring(currentLng.length + 1)}`;
    }
    // If the language code is not in the path, simply add the new language code at the beginning
    return `/${newLng}${currentPath}`;
  };

  return (
    <div>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from {lng} to:{' '}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          const localizedPath = getLocalizedPath(lng, l, path).trim();
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link
                className="font-size-30 tajawal-medium"
                href={localizedPath}
              >
                {l === 'ar' ? 'عربي' : 'English'}
              </Link>
            </span>
          );
        })}
    </div>
  );
};
