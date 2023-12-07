import type { Metadata } from 'next';

import SignInSection from '@/components/signin';
import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'Chatbot',
  description: 'Chatbot Website',
};

const NewRouter = async ({
  params: { lng },
}: {
  params: {
    lng: string; // or whatever type 'lng' should be
  };
}) => {
  return (
    <Main>
      <SignInSection lng={lng} />
    </Main>
  );
};

export default NewRouter;
