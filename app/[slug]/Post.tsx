import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import {
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Box,
  Link,
  UnorderedList,
  OrderedList,
  ListItem,
} from "../chakra";
import BlogTags from "@/app/components/BlogTags";
import AuthorMeta from "@/app/components/AuthorMeta";
import { IPost, estimateReadTimeMinutes } from "../utils";
const components: MDXComponents = {
  h1: ({ children }) => (
    <Heading as="h1" mt={12}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" mt={10}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" mt={8}>
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text mt={4} fontSize={"xl"} fontFamily={"serif"}>
      {children}
    </Text>
  ),
  img: (props) => (
    <Image
      src={props.src as string}
      alt={props.alt as string}
      mt={10}
    >
      {props.children}
    </Image>
  ),
  a: (props) => (
    <Link href={props.href as string} textDecoration={"underline"}>
      {props.children}
    </Link>
  ),
  ul: (props) => <UnorderedList p={4}>{props.children}</UnorderedList>,
  ol: (props) => <OrderedList p={4}>{props.children}</OrderedList>,
  li: (props) => (
    <ListItem mt={2} fontFamily={"serif"} fontSize={"xl"}>
      {props.children}
    </ListItem>
  )
};

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Post(props: { post: IPost }) {
  const { post } = props;
  return (
    <Container p={20} maxWidth="2xl">
      <Stack>
        <BlogTags tags={["Product"]} />
        <Heading fontSize="5xl">{post.title}</Heading>
        <Text fontSize="2xl" color="gray.500">
          {post.excerpt}
        </Text>
        <AuthorMeta
          long
          name={post.author}
          date={post.publishedAt}
          readTimeMinutes={estimateReadTimeMinutes(post.content)}
        />
        <Box>
          <Image
            src={post.image}
            alt={post.imageAlt}
          />
        </Box>
      </Stack>
      <MDXRemote source={post.content} components={components} />
    </Container>
  );
}
