import CompletedSuccessfully from '@/components/completedsuccessfully';

export const dynamic = 'force-dynamic';

export default function SignIn({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <main>
      <CompletedSuccessfully lng={lng} />;
    </main>
  );
}
