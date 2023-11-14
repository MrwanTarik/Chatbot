'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import type { ContactUsType } from '@/components/ContactUs';
import ContactUs from '@/components/ContactUs';
import type { ItemsStackedType } from '@/components/ItemsStacked';
import ItemsStacked from '@/components/ItemsStacked';
import type { VideoBannerSliderInterface } from '@/components/VideoBannerSlider';
import VideoBannerSlider from '@/components/VideoBannerSlider';
import { useSEO } from '@/hooks/useSEO';
import { Homequery } from '@/lib/queries/HomeQuery';

export default function Home({ lng }: { lng: string }) {
  const site = lng === 'en' ? 'default' : 'arabic';
  const id = lng === 'en' ? 'home' : '451996cc-1b39-4a5b-8991-0ac1e49661b2';
  const sdata = useSEO(Homequery, lng, id);

  const { data } = useSuspenseQuery(Homequery, {
    variables: { site, id },
  });
  return (
    <main className={sdata.main_class_wrapper}>
      <VideoBannerSlider data={data as VideoBannerSliderInterface} lang={lng} />
      <ItemsStacked data={data as ItemsStackedType} lang={lng} />
      <ContactUs data={data as ContactUsType} lang={lng} />
    </main>
  );
}
