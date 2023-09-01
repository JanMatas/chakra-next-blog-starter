import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
} from "../chakra";
import BlogTags from "./BlogTags";
import AuthorMeta from "./AuthorMeta";
import { IPost, estimateReadTimeMinutes } from '../utils';

interface Props {
  post: IPost;
}

export default function PostFeatured(props: Props) {
  const { post } = props;
  return (
    <LinkBox>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight={3}
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box>
              <Image borderRadius={'lg'} src={post.image} alt={post.imageAlt} />
            </Box>
          </Box>
          {/* Dotted frame for featured post. */}
          <Box zIndex="-1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={"radial(teal.600 1px, transparent 1px)"}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
        >
          <BlogTags tags={post.tags} />
          <Heading marginTop="1">
            <Text>
              <LinkOverlay as={Link} href={`/${props.post.slug}`}>
                {post.title}
              </LinkOverlay>
            </Text>
          </Heading>
          <Text as="p" marginTop="2" color={"gray.700"} fontSize="lg">
            {post.excerpt}
          </Text>
          <AuthorMeta
            name={post.author}
            long
            date={post.publishedAt}
            readTimeMinutes={estimateReadTimeMinutes(post.content)}
          />
        </Box>
      </Box>
    </LinkBox>
  );
}
