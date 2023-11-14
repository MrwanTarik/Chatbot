'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import type { BigSliderOurProductsType } from '@/components/BigSliderOurProducts';
import BigSliderOurProducts from '@/components/BigSliderOurProducts';
import type { ContactUsType } from '@/components/ContactUs';
import ContactUs from '@/components/ContactUs';
import type { TopImageBannerType } from '@/components/TopImageBanner';
import TopImageBanner from '@/components/TopImageBanner';
import { useSEO } from '@/hooks/useSEO';
import { HistroyQuery } from '@/lib/queries/HistoryQuery';
import { OurProductsQuery } from '@/lib/queries/OurProductsQuery';

// import VideoBannerSlider from '@/components/VideoBannerSlider';

export default function OurProducts({ lng }: { lng: string }) {
  const site = lng === 'en' ? 'default' : 'arabic';
  const id =
    lng === 'en'
      ? 'a885d243-88a5-43f1-9355-21e02e2f424c'
      : 'a6566969-55fd-4a1f-bb9e-dcd10498b253';
  const sdata = useSEO(HistroyQuery, lng, id);

  const { data } = useSuspenseQuery(OurProductsQuery, {
    variables: { site, id },
  });
  return (
    <main className={sdata.main_class_wrapper}>
      <div className="hidden">{lng}</div>
      <TopImageBanner data={data as TopImageBannerType} />

      <BigSliderOurProducts
        data={data as BigSliderOurProductsType}
        lang={lng}
      />
      <ContactUs data={data as ContactUsType} lang={lng} />
    </main>
  );
}
