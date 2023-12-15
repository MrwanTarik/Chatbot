import React from 'react';

import DashboardSettingsSection from '@/components/dashboardsettingssection';
import { LayoutWithSidebar } from '@/templates/layoutwithsidebar';

export const dynamic = 'force-dynamic';

export default function DashboardSettings({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <LayoutWithSidebar lng={lng}>
      <DashboardSettingsSection lng={lng} />
    </LayoutWithSidebar>
  );
}
