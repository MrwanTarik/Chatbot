import ForgetPasswordSection from '@/components/forgetpasswordsection';

export const dynamic = 'force-dynamic';

export default function ForgetPassword({
  params: { lng },
}: {
  params: { lng: string };
}) {
  // const { t } = useTranslation(lng, 'language-switcher');

  return (
    <main>
      <ForgetPasswordSection lng={lng} />
    </main>
  );
}
