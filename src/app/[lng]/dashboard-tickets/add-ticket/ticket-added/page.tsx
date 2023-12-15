import React from 'react';

import TicketAddedSection from '@/components/ticketaddedSection';
import { LayoutWithSidebar } from '@/templates/layoutwithsidebar';

export const dynamic = 'force-dynamic';
export default function TicketAdded({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <LayoutWithSidebar lng={lng}>
      <TicketAddedSection lng={lng} />
    </LayoutWithSidebar>
  );
}
