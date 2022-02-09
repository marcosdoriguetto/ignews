import Link from "next/link"

type PostItemProps = {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export function PostItem({ date, title, excerpt, slug }: PostItemProps) {
  return(
    <Link href={`/posts/${slug}`}>
      <a>
        <time>{date}</time>
        <strong>{title}</strong>
        <p>{excerpt}</p>
      </a>
    </Link>
  )
}