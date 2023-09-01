import { HStack, Text, VStack, Image } from "../chakra";

export interface IProps {
  long?: boolean;
  date: string;
  readTimeMinutes: number;
  name: string;
}

export default function Author(props: IProps) {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        width="45"
        height="45"
        style={{ borderRadius: "100%" }}
        src="/author.jpg"
        alt={`Avatar of ${props.name}`}
      />
      <VStack spacing={0} alignItems="flex-start">
        <Text fontWeight="medium">{props.name}</Text>
        {!props.long && (
          <Text color="gray.500">
            {props.date} | {props.readTimeMinutes} minutes
          </Text>
        )}
        {props.long && (
          <Text color="gray.500">
            Published on {props.date} | {props.readTimeMinutes} min read
          </Text>
        )}
      </VStack>
    </HStack>
  );
}
