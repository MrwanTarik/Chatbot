import type { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
};

const LayoutWithSidebar = (props: IMainProps) => (
  <>
    {props.meta}

    <main className={`${props.className}`}>
      <div>sidebar</div>
      {props.children}
    </main>
  </>
);

export { LayoutWithSidebar };
