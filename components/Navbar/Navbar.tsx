import React from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';
import css from './Navbar.module.css';

export function Navbar() {
  const router = useRouter();
  const menuClassname = (url: string) => router.pathname === url ? `${css.link} ${css.active}` : css.link;
  return (
    <nav className={css.navbar}>
      <ul className={css.menu}>
        <li className={css.menu__item} >
          <Link href="/" >
            <a className={menuClassname('/')}>Главная</a>
          </Link>
        </li>
        <li className={css.menu__item}>
          <Link href="/articles" >
            <a className={menuClassname('/articles')}>Статьи</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}