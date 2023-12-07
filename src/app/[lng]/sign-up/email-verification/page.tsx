import EmailVerification from '@/components/emailverification';

// import { useTranslation } from '../../i18n/client';

export const dynamic = 'force-dynamic';

export default function SignIn({
  params: { lng },
}: {
  params: { lng: string };
}) {
  // const { t } = useTranslation(lng, 'language-switcher');

  return (
    <main>
      <EmailVerification lng={lng} />
    </main>
  );
}
