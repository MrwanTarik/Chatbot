import About from '@/gqlPages/about';
import Home from '@/gqlPages/home';
import OurProducts from '@/gqlPages/our-products';
import UsePageID from '@/hooks/usePageID';
import { getClient } from '@/lib/client';
import { AboutQuery } from '@/lib/queries/AboutQuery';
import { HistroyQuery } from '@/lib/queries/HistoryQuery';
import { Homequery } from '@/lib/queries/HomeQuery';
import { LeadershipQuery } from '@/lib/queries/LeadershipQuery';
import { OurProductsQuery } from '@/lib/queries/OurProductsQuery';
import { Main } from '@/templates/Main';

import NotFound from '../../../gqlPages/404';

// import { useTranslation } from '../../i18n';
type Props = {
  params: { lng: string; slug: string };
};

export async function generateMetadata({ params }: Props) {
  const site = params.lng === 'en' ? 'default' : 'arabic';
  const id = await UsePageID(params.slug, params.lng);
  // if id is null then return 404
  if (id === null) return { notFound: true };

  const seoData = await getClient().query({
    query:
      Homequery ||
      AboutQuery ||
      LeadershipQuery ||
      HistroyQuery ||
      OurProductsQuery,
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
    title: seoData.data.entry.title || '404',
    icons: seoData?.data?.entry?.seo_image?.path || '/img/big-logo.svg',
    style_css: seoData.data.entry.style_css,
    main_class_wrapper: seoData.data.entry.main_class_wrapper,
  };

  return {
    ...data,
  };
}

const NewRouter = async ({
  params: { lng, slug },
}: {
  params: {
    lng: string; // or whatever type 'lng' should be
    slug: string;
  };
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { t } = await useTranslation(lng, 'translation');

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 2000);
  // });
  await generateMetadata({ params: { lng, slug } });

  const id = await UsePageID(slug, lng);
  return (
    <Main className="">
      {(() => {
        if (lng === 'en') {
          switch (id) {
            case 'home':
              return <Home lng={lng} />;
            case 'dc9386fd-df5b-4233-96c7-c092ba442f70':
              return <About lng={lng} />;

            case 'a885d243-88a5-43f1-9355-21e02e2f424c':
              return <OurProducts lng={lng} />;
            default:
              return <NotFound lng={lng} />;
          }
        } else if (lng === 'ar') {
          switch (id) {
            case '451996cc-1b39-4a5b-8991-0ac1e49661b2':
              return <Home lng={lng} />;
            case '1e33ecc2-28e6-452e-b0cb-85c66d5efb47':
              return <About lng={lng} />;
            case 'a6566969-55fd-4a1f-bb9e-dcd10498b253':
              return <OurProducts lng={lng} />;
            default:
              return <NotFound lng={lng} />;
          }
        } else {
          // If none of the conditions above are met, return a default component or null
          return <div>Unsupported Language or Missing Content</div>;
        }
      })()}
    </Main>
  );
};

export default NewRouter;
