'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { LanguageSwitcherClient } from '@/app/[lng]/languageSwitcher/client';
import type { QueryResultType } from '@/lib/queries/navbarQuery';
import { query } from '@/lib/queries/navbarQuery';
// import { useTranslation } from '@/app/i18n/client';

export const dynamic = 'force-dynamic';

export default function Header({ lang }: { lang: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isShow, setIsShow] = useState<Record<string, boolean>>({});
  const [heightToggle, setHeightToggle] = useState<Record<string, boolean>>({});
  const path = usePathname();
  const isActiveMenuItem = (url: string) => {
    if (lang === 'en') return path === url;
    return path.replace('/ar/', '/') === url;
  };

  // Function to determine if any submenu item is active
  const isActiveSubMenuItem = (children: Array<{ page: { url: string } }>) => {
    return children.some((child) => isActiveMenuItem(child.page.url));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleIsShow = (id: string) => {
    setIsShow((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleHeightToggle = (id: string) => {
    setHeightToggle((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // const { t } = useTranslation(lang, '');
  const { data } = useSuspenseQuery<QueryResultType>(query);
  const navTree = lang === 'en' ? data?.nav.treeEn : data?.nav.treeAr;
  return (
    <>
      {/* <h1>{t('title')}</h1> */}

      <header className="header">
        <div className="header__wrapper container mx-auto">
          <div className="grid grid-cols-12 gap-4">
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
                <ul className="main-menu__mobile">
                  <li className="main-menu__mobile-item">
                    <div className="main-menu__language--link">
                      <LanguageSwitcherClient lng={lang} />
                    </div>
                  </li>
                  <li className="main-menu__mobile-item">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="main-menu__mobile-link"
                    >
                      <img src="/img/icon-nav-burger.svg" alt="Toggle menu" />
                    </button>
                  </li>
                </ul>

                <ul className={`main-menu__list ${menuOpen ? 'is-open' : ''}`}>
                  {navTree?.map((item, index) => (
                    <li
                      key={uuidv4()}
                      className={clsx('main-menu__item', {
                        'main-menu__item-dropdown': item.children.length,
                        'is-active':
                          isActiveMenuItem(item.page.url) ||
                          isActiveSubMenuItem(item.children),
                        hidden:
                          item.page.title === 'Home' ||
                          item.page.title === 'الرئيسية',
                      })}
                    >
                      <Link
                        onClick={() => {
                          if (item.children.length > 0) {
                            toggleIsShow(index.toString());
                          }
                        }}
                        href={item.page.url || '/'}
                        className="main-menu__link"
                      >
                        <>
                          {item.page.title}
                          {
                            // if (item.children.length > 0) show the nav arrow
                            item.children.length > 0 && (
                              <span className="main-menu__icon nav-arrow !inline-block">
                                <img src="/img/nav-arrow.svg" alt="nav arrow" />
                              </span>
                            )
                          }
                        </>
                      </Link>
                      {item.children.length > 0 && (
                        <div
                          className={`dropdown-menu__wrapper ${
                            isShow[index.toString()] ? 'is-show' : ''
                          }`}
                        >
                          <ul className="dropdown-menu__list">
                            {item.children.map((child, indextwo) => (
                              <li
                                key={uuidv4()}
                                className={`dropdown-menu__item ${
                                  child.children.length
                                    ? 'main-menu__item has_sub_menu'
                                    : ''
                                }`}
                              >
                                <Link
                                  onClick={() => {
                                    if (child.children.length > 0) {
                                      toggleHeightToggle(indextwo.toString());
                                    }
                                  }}
                                  href={child.page.url || '/'}
                                  className={clsx('dropdown-menu__link', {
                                    'is-active': isActiveMenuItem(
                                      child.page.url,
                                    ),
                                  })}
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
                                  <div
                                    className={`dropdown-menu__wrapper sub-dropdown-menu__wrapper  ${
                                      heightToggle[indextwo.toString()]
                                        ? 'is-show heightToggle'
                                        : ''
                                    }`}
                                  >
                                    <ul className="dropdown-menu__list lg:pb-0">
                                      {child.children.map((subChild) => (
                                        <li
                                          key={uuidv4()}
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
                    <div className="main-menu__language--link">
                      <LanguageSwitcherClient lng={lang} />
                    </div>
                    <button
                      type="button"
                      className="main-menu__close"
                      onClick={toggleMenu}
                    >
                      <img
                        src="https://luberefapp.s3-accelerate.amazonaws.com/dist/img/icon-nav-close.svg"
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
