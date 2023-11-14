'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { useTranslation } from '@/app/i18n/client';
import type { FooterType } from '@/lib/queries/footerQuery';
import { query } from '@/lib/queries/footerQuery';

export const dynamic = 'force-dynamic';

export default function Footer({ lang }: { lang: string }) {
  const { t } = useTranslation(lang, '');
  const { data } = useSuspenseQuery<FooterType>(query);
  const navTree = lang === 'en' ? data?.nav.treeEn : data?.nav.treeAr;
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-0 lg:gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="footer__logo">
              <h1>
                <Link href="/" className="smoothScroll">
                  <img
                    src="https://luberefapp.s3-accelerate.amazonaws.com/dist/img/footer-logo.svg"
                    alt=""
                  />
                </Link>
              </h1>
            </div>
          </div>
          <div className="col-end-13 col-span-12 lg:col-end-13 lg:col-span-8 xl:col-end-13 xl:col-span-6">
            <div className="footer__column--wrapper">
              <div className="footer__column">
                <div className="footer__column-title">
                  <h4>{t('exploreMore')}</h4>
                </div>
                <nav className="footer__menu">
                  <ul className="footer__menu-list">
                    {navTree?.map((item) => (
                      <li
                        key={uuidv4()}
                        className={`footer__menu-item ${
                          item.page.title === 'Home' ||
                          item.page.title === 'الرئيسية'
                            ? 'hidden'
                            : ''
                        }`}
                      >
                        <Link
                          href={String(item.page.url)}
                          className="footer__menu-link"
                        >
                          {item.page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="footer__column">
                <div className="footer__column-title" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <div className="footer__copyright-text">
            {new Date().getFullYear()} © Saudi Aramco Base Oil Company -
            Luberef
          </div>

          <ul className="footer__social">
            <li className="footer__social-item">
              <a
                href="https://www.linkedin.com/company/luberef"
                className="footer__social-link"
                target="_blank"
              >
                <img src="/img/linkedin2.svg" alt="linkedin" />
              </a>
            </li>

            <li className="footer__social-item">
              <a
                href="https://twitter.com/AramcoLUBEREF"
                className="footer__social-link"
                target="_blank"
              >
                <img src="/img/twitter.svg" alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
