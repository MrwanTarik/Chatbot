import type { Metadata } from 'next';

import { Main } from '@/templates/Main';

// import { useTranslation } from '../../i18n';

export const metadata: Metadata = {
  title: 'Luberef',
  description: 'Luberef Website',
};

const NewRouter = async ({
  params: { lng },
}: {
  params: {
    lng: string; // or whatever type 'lng' should be
  };
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { t } = await useTranslation(lng, 'translation');

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 2000);
  // });
  return (
    <Main>
      <div>{lng}</div>
    </Main>
  );
};

export default NewRouter;
