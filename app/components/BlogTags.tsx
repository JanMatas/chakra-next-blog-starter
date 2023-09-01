import { HStack, Tag } from "../chakra";

interface Props {
    marginTop?: number;
    tags: any[];
  }
  

export default function BlogTags (props: Props) {
    const { marginTop = 0, tags } = props;
  
    return (
      <HStack spacing={2} marginTop={marginTop}>
        {tags.map((tag) => {
          return (
            <Tag size="md" variant="solid" colorScheme="whatsapp" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </HStack>
    );
  };