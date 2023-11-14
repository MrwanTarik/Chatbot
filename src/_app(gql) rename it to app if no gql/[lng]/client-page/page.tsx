'use client';

import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Link from 'next/link';

import { useTranslation } from '../../i18n/client';
import { LanguageSwitcherClient } from '../languageSwitcher/client';

export const dynamic = 'force-dynamic';

const query = gql`
  query {
    nav(handle: "top_navigation") {
      handle
      title
      ... on Navigation {
        handle
        title
        treeEn: tree {
          page {
            title
            url
          }
          children {
            page {
              title
              url
            }
            children {
              page {
                title
                url
              }
            }
          }
        }
        treeAr: tree(site: "arabic") {
          page {
            title
            url
          }
          children {
            page {
              title
              url
            }
            children {
              page {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`;

type PageType = {
  title: string;
  url: string | null;
};

type ChildType = {
  page: PageType;
  children: ChildType[];
};

type TreeType = {
  page: PageType;
  children: ChildType[];
};

type NavigationType = {
  handle: string;
  title: string;
  treeEn: TreeType[];
  treeAr: TreeType[];
};

type QueryResultType = {
  nav: NavigationType;
};

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, 'language-switcher');
  const { data } = useSuspenseQuery<QueryResultType>(query);
  const navTree = lng === 'en' ? data?.nav.treeEn : data?.nav.treeAr;

  return (
    <>
      <h1>{t('title')}</h1>
      {/* headerQL  i want it dymanic instead of the static */}
      <header className="header">
        <div className="header__wrapper container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            {/* Logo section remains unchanged */}
            <div className="col-span-6 lg:col-span-2">
              <div className="header__logo">
                <h1>
                  <Link href="/" className="header__logo--link">
                    <img src="/img/header-logo.png" alt="" />
                  </Link>
                </h1>
              </div>
            </div>

            {/* Dynamic Menu section */}
            <div className="col-span-6 lg:col-span-10">
              <nav className="main-menu main-menu__wrapper">
                <ul className="main-menu__list">
                  {navTree?.map((item) => (
                    <li
                      key={item.page.url}
                      className={`main-menu__item ${
                        item.children.length ? 'main-menu__item-dropdown' : ''
                      }`}
                    >
                      <Link
                        href={item.page.url || '/'}
                        className="main-menu__link"
                      >
                        {item.page.title}
                      </Link>
                      {item.children.length > 0 && (
                        <div className="dropdown-menu__wrapper">
                          <ul className="dropdown-menu__list">
                            {item.children.map((child) => (
                              <li
                                key={child.page.url}
                                className={`dropdown-menu__item ${
                                  child.children.length
                                    ? 'main-menu__item has_sub_menu'
                                    : ''
                                }`}
                              >
                                <Link
                                  href={child.page.url || '/'}
                                  className="dropdown-menu__link"
                                >
                                  {child.page.title}
                                  {child.children.length > 0 && (
                                    <span className="main-menu__icon !inline-block">
                                      <img
                                        src="/img/nav-arrow.svg"
                                        alt="nav arrow"
                                      />
                                    </span>
                                  )}
                                </Link>

                                {child.children.length > 0 && (
                                  <div className="dropdown-menu__wrapper sub-dropdown-menu__wrapper">
                                    <ul className="dropdown-menu__list lg:pb-0">
                                      {child.children.map((subChild) => (
                                        <li
                                          key={subChild.page.url}
                                          className="dropdown-menu__item"
                                        >
                                          <Link
                                            href={subChild.page.url || '/'}
                                            className="dropdown-menu__link sub-dropdown-menu__link"
                                          >
                                            {subChild.page.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                  <li className="main-menu__language">
                    {/* ... (language switcher and close button) */}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <LanguageSwitcherClient lng={lng} />
    </>
  );
}
