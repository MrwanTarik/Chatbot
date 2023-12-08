import EmailVerificationSection from '@/components/emailverificationsection';

// import { useTranslation } from '../../i18n/client';

export const dynamic = 'force-dynamic';

export default function EmailVerification({
  params: { lng },
}: {
  params: { lng: string };
}) {
  // const { t } = useTranslation(lng, 'language-switcher');

  return (
    <main>
      <EmailVerificationSection lng={lng} />
    </main>
  );
}
