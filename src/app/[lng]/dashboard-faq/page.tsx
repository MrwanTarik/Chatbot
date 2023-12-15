import React from 'react';

import DashboardFaqSection from '@/components/dashboardfaqsection';
import { LayoutWithSidebar } from '@/templates/layoutwithsidebar';

export const dynamic = 'force-dynamic';
export default function DashboardFaq({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <LayoutWithSidebar lng={lng}>
      <DashboardFaqSection lng={lng} />
    </LayoutWithSidebar>
  );
}
