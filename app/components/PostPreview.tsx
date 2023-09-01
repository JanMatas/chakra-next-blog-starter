import {
  Box,
  WrapItem,
  Image,
  Heading,
  Text,
  Link,
  LinkBox,
  LinkOverlay,
} from "../chakra";
import BlogTags from "./BlogTags";
import AuthorMeta from "./AuthorMeta";
import { IPost, estimateReadTimeMinutes } from "../utils";

export default function ArticleItem(props: { post: IPost }) {
  const { post } = props;
  return (
    <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
      <LinkBox>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box>
              <Image
                src={post.image}
                alt={post.imageAlt}
                sizes="100vw"
                // Make the image display full width
                style={{
                  height: "150px",

                  width: "auto",
                }}
                width={160}
                height={90}
              />
            </Box>
          </Box>
          <BlogTags tags={post.tags} marginTop={3} />
          <Heading fontSize="xl" marginTop="2">
            <Text>
              <LinkOverlay as={Link} href={`/${post.slug}`}>
                {post.title}
              </LinkOverlay>
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            {post.excerpt}
          </Text>
          <AuthorMeta
            name={post.author}
            date={post.publishedAt}
            readTimeMinutes={estimateReadTimeMinutes(post.content)}
          />
        </Box>
      </LinkBox>
    </WrapItem>
  );
}
