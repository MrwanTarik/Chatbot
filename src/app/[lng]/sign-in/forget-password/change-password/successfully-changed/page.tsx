import SuccessfullyChangedPassword from '@/components/successfullychangedpassword';

export const dynamic = 'force-dynamic';

export default function ChangePassword({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <main>
      <SuccessfullyChangedPassword lng={lng} />
    </main>
  );
}
