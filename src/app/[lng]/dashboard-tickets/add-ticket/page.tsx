import React from 'react';

import OpenNewTicket from '@/components/opennewticket';
import { LayoutWithSidebar } from '@/templates/layoutwithsidebar';

export const dynamic = 'force-dynamic';

export default function AddTicket({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <LayoutWithSidebar lng={lng}>
      <OpenNewTicket lng={lng} />
    </LayoutWithSidebar>
  );
}
