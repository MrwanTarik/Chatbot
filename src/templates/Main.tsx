import type { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}

    <main className={`${props.className}`}>{props.children}</main>
  </>
);

export { Main };
