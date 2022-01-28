import { SignInButton } from '../SignInButton';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image width={110} height={31} src="/images/logo.svg" alt="Logo ig.news" />
        <nav>
          <Link href="/"><a className={styles.active}>Home</a></Link>
          <Link href="/posts" prefetch><a>Posts</a></Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}