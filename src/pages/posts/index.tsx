import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href=''>
            <time>24 de janeiro de 2022</time>
            <strong>Post 1</strong>
            <p>Introdução do Post</p>
          </a>
          <a href=''>
            <time>24 de janeiro de 2022</time>
            <strong>Post 1</strong>
            <p>Introdução do Post</p>
          </a>
          <a href=''>
            <time>24 de janeiro de 2022</time>
            <strong>Post 1</strong>
            <p>Introdução do Post</p>
          </a>
          <a href=''>
            <time>24 de janeiro de 2022</time>
            <strong>Post 1</strong>
            <p>Introdução do Post</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType('post', {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  console.log(response);

  return {
    props: {}
  }
}