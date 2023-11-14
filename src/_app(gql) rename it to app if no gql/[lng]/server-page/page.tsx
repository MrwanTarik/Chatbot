import type { Metadata } from 'next';

// import { useTranslation } from '../../i18n';
import FadeIn from '@/components/fadescroll';

export const metadata: Metadata = {
  title: 'about',
  description:
    'Incrementally migrate your existing application from pages to app',
};

export default function About() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { t } = await useTranslation(lng, 'translation');
  return (
    <div style={{ minHeight: '150vh' }}>
      <h1>Scroll down</h1>

      <div style={{ marginTop: '100vh' }}>
        <FadeIn direction="left">
          <div>This will fade in from the left</div>
        </FadeIn>

        <FadeIn direction="right">
          <div>This will fade in from the right</div>
        </FadeIn>

        <FadeIn direction="top">
          <div>This will fade in from the top</div>
        </FadeIn>

        <FadeIn direction="bottom">
          <div>This will fade in from the bottom</div>
        </FadeIn>
      </div>
    </div>
  );
}
