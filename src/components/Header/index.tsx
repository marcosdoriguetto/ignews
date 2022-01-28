import Image from 'next/image';

import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image width={110} height={31} src="/images/logo.svg" alt="Logo ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/"><a>Home</a></ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch><a>Posts</a></ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}