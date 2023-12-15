import React from 'react';

import TicketDetailsSection from '@/components/ticketdetailsSection';
import { LayoutWithSidebar } from '@/templates/layoutwithsidebar';

export default function TicketsDetails({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <LayoutWithSidebar lng={lng}>
      <TicketDetailsSection lng={lng} />
    </LayoutWithSidebar>
  );
}
