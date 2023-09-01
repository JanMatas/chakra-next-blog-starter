import { getPost, getPosts } from "../utils";
import Post from "./Post";

interface IProps {
  params: { slug: string };
}

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
  return getPosts().map((article) => {
    return { slug: article.slug };
  });
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: IProps) {
  const post = getPost(`${params.slug}`);
  return <Post post={post} />;
}
