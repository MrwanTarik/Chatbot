import ForgetPasswordverificationSection from '@/components/forgetpasswordverificationsection';

export const dynamic = 'force-dynamic';

export default function forgetPasswordVerification({
  params: { lng },
}: {
  params: { lng: string };
}) {
  // const { t } = useTranslation(lng, 'language-switcher');

  return (
    <main>
      <ForgetPasswordverificationSection lng={lng} />
    </main>
  );
}
