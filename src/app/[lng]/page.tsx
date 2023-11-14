import Home from '@/gqlPages/home';
import { getClient } from '@/lib/client';
import { Homequery } from '@/lib/queries/HomeQuery';

type Props = {
  params: { lng: string };
};

export async function generateMetadata({ params }: Props) {
  const site = params.lng === 'en' ? 'default' : 'arabic';
  const id =
    params.lng === 'en' ? 'home' : '451996cc-1b39-4a5b-8991-0ac1e49661b2';

  const seoData = await getClient().query({
    query: Homequery,
    variables: { site, id },
    // context: {
    //   fetchOptions: {
    //     next: { revalidate: 0 },
    //   },
    // },
  });

  const data = {
    description: seoData.data.entry.seo_description,
    seo_title: seoData.data.entry.seo_title,
    id: seoData.data.entry.id,
    title: seoData.data.entry.title,
    icons: seoData.data.entry.seo_image.path,
    style_css: seoData.data.entry.style_css,
  };

  // optionally access and extend (rather than replace) parent metadata

  return {
    ...data,
  };
}

const NewRouter = async ({ params: { lng } }: { params: { lng: string } }) => {
  await generateMetadata({ params: { lng } });

  return <Home lng={lng} />;
};

export default NewRouter;

// to use t
// import { useTranslation } from '../i18n';
// eslint-disable-next-line react-hooks/rules-of-hooks
// const { t } = await useTranslation(lng, 'translation');

// await new Promise((resolve) => {
//   setTimeout(resolve, 2000);
// });
// return ()
