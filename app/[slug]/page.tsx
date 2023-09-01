import { Container, Heading } from "../chakra";
import { IArticle, getPost, getPosts } from "../utils";

interface IProps {
  params: { slug: string };
}

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
  return getPosts().map((article) => {
    return { slug: article.slug };
  });
}

import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import { Text } from "../chakra";
const components: MDXComponents = {
  p: ({ children }) => (
    <Text mt={4} fontSize={"xl"} fontFamily={"serif"}>
      {children}
    </Text>
  ),
};
function PostContent(props: { post: IArticle }) {
  return <MDXRemote source={props.post.content} components={components} />;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: IProps) {
  const post = getPost(`${params.slug}`);

  return (
    <Container py={20} maxW={"3xl"}>
      <Heading as="h1" fontSize={"xl"}>
        {post.title}
      </Heading>
      <PostContent post={post} />
    </Container>
  );
}
