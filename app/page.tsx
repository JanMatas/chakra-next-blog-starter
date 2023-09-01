import {
  Card,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "./chakra";
import { IArticle, getPosts } from "./utils";

function PostPreview(props: { post: IArticle }) {
  return (
    <LinkBox>
      <Card p={5}>
        <Heading>{props.post.title}</Heading>
        <LinkOverlay href={`/${props.post.slug}`}>
          <Text>{props.post.excerpt}</Text>
        </LinkOverlay>
      </Card>
    </LinkBox>
  );
}

export default function Home() {
  const posts = getPosts();
  return (
    <Container py={20} maxW={"3xl"}>
      <VStack justifyContent={"center"}>
        <Heading as="h1" fontSize={"xl"}>
          Chakra + Next13 + MDX blog
        </Heading>
        {posts.map((p, i) => (
          <PostPreview key={i} post={p} />
        ))}
      </VStack>
    </Container>
  );
}
