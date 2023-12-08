import SignInSection from '@/components/signin';
import { LayoutWithSidebar } from '@/templates/layoutwithsidebar';

// import { useTranslation } from '../../i18n/client';

export const dynamic = 'force-dynamic';

export default function Dashboard({
  params: { lng },
}: {
  params: { lng: string };
}) {
  // const { t } = useTranslation(lng, 'language-switcher');

  return (
    <LayoutWithSidebar>
      <SignInSection lng={lng} />
    </LayoutWithSidebar>
  );
}
