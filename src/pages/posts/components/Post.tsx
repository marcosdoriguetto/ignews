type PostProps = {
  date: string;
  title: string;
  excerpt: string;
}

export function Post({ date, title, excerpt }: PostProps) {
  return(
    <a href=''>
      <time>{date}</time>
      <strong>{title}</strong>
      <p>{excerpt}</p>
  </a>
  )
}