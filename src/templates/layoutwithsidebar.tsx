import type { ReactNode } from 'react';

import Sidebar from '@/components/sidebar';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  lng: string;
};

const LayoutWithSidebar = (props: IMainProps) => (
  <>
    {props.meta}
    <main className={`${props.className}`}>
      <div className="flex">
        <Sidebar lng={props.lng} />
        {props.children}
      </div>
    </main>
  </>
);

export { LayoutWithSidebar };
