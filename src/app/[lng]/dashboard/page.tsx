import DashboardHomeSection from '@/components/dashboardhomeSection';
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
    <LayoutWithSidebar lng={lng}>
      <DashboardHomeSection lng={lng} />
    </LayoutWithSidebar>
  );
}
