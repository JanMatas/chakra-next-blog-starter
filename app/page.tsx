import { Container, Divider, Heading, Stack, Text, Wrap } from "./chakra";
import PostFeatured from "./components/PostFeatured";
import PostPreview from "./components/PostPreview";
import { IPost, getPosts } from "./utils";


// Design based on https://chakra-templates.dev/blog/blog-article-list
export default function Page() {
  const posts = getPosts();
  const featuredPost = posts.find((a) => a.featured) as IPost;
  const others = posts.filter((a) => a !== featuredPost);

  return (
    <Container maxW={"6xl"} px="12" my={12}>
      <Stack alignItems={"center"}>
        <Heading as="h1" fontSize={"5xl"}>
          Chakra + Next13 + MDX blog
        </Heading>

        <Text as="h1" fontSize={"xl"} color={"gray.500"}>
          Complete configuration with SSR, responsive design, fast refresh and
          image optimization
        </Text>
      </Stack>
      {featuredPost && <PostFeatured post={featuredPost} />}
      <Divider marginTop="5" />
      <Heading as="h2" mt={10}>
        Latest articles
      </Heading>

      <Wrap spacing="30px" marginTop="5">
        {others.map((a, i) => (
          <PostPreview key={i} post={a} />
        ))}
      </Wrap>
    </Container>
  );
}
