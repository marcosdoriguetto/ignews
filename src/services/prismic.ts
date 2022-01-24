import * as prismic from '@prismicio/client';

export function getPrismicClient() {
  const repositoryName = process.env.PRISMIC_NAME_REPOSITORY;
  const endpoint = prismic.getEndpoint(repositoryName);

  const client = prismic.createClient(
    endpoint,
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