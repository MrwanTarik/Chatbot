'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import type { ContactUsType } from '@/components/ContactUs';
import ContactUs from '@/components/ContactUs';
import type { TopImageBannerType } from '@/components/TopImageBanner';
import TopImageBanner from '@/components/TopImageBanner';
import { useSEO } from '@/hooks/useSEO';
import { AboutQuery } from '@/lib/queries/AboutQuery';

// import VideoBannerSlider from '@/components/VideoBannerSlider';

export default function About({ lng }: { lng: string }) {
  const site = lng === 'en' ? 'default' : 'arabic';
  const id =
    lng === 'en'
      ? 'dc9386fd-df5b-4233-96c7-c092ba442f70'
      : '1e33ecc2-28e6-452e-b0cb-85c66d5efb47';
  const sdata = useSEO(AboutQuery, lng, id);

  const { data } = useSuspenseQuery(AboutQuery, {
    variables: { site, id },
  });
  return (
    <main className={sdata.main_class_wrapper}>
      <div className="hidden">{lng}</div>
      <TopImageBanner data={data as TopImageBannerType} />

      <ContactUs data={data as ContactUsType} lang={lng} />
    </main>
  );
}
