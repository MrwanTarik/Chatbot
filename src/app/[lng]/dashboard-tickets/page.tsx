import React from 'react';

import TicketSection from '@/components/ticketsection';
import { LayoutWithSidebar } from '@/templates/layoutwithsidebar';

export const dynamic = 'force-dynamic';
export default function DashboardTickets({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <LayoutWithSidebar lng={lng}>
      <TicketSection lng={lng} />
    </LayoutWithSidebar>
  );
}
