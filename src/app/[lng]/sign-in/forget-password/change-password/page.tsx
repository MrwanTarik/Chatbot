import ChangePasswordSection from '@/components/changepasswordsection';

export const dynamic = 'force-dynamic';

export default function ChangePassword({
  params: { lng },
}: {
  params: { lng: string };
}) {
  // const { t } = useTranslation(lng, 'language-switcher');

  return (
    <main>
      <ChangePasswordSection lng={lng} />
    </main>
  );
}
