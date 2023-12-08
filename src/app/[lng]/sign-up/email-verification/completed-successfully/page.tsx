import CompletedSuccessfullySection from '@/components/completedsuccessfullysection';

export const dynamic = 'force-dynamic';

export default function CompletedSuccessfully({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <main>
      <CompletedSuccessfullySection lng={lng} />
    </main>
  );
}
