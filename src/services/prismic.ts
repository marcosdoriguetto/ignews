import * as prismic from '@prismicio/client';

export function getPrismicClient() {

  const client = prismic.createClient(
    process.env.PRISMIC_ENDPOINT,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      routes: [
        {
          type: 'post',
          path: '/:uid'
        }
      ],
    }
  )

  return client;
}