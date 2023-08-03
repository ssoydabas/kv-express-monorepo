import { VStack, Text, Input, Button } from "native-base";

export default function WelcomeFormSection() {
  return (
    <VStack
      width="30%"
      p="4"
      space="1"
      bg="opaque.600"
      borderWidth="2"
      borderColor="opaque.800"
      shadow="deepDark"
      borderRadius="2xl"
    >
      <Text fontSize="3xl">Contact Us!</Text>

      <Text mt="4" fontSize="lg" fontWeight="bold" italic>
        FROM
      </Text>

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        placeholder="Enter your address"
      />

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        placeholder="Enter your postcode"
      />

      <Text mt="4" fontSize="lg" fontWeight="bold" italic>
        TO
      </Text>

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        placeholder="Enter destination address"
      />

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        placeholder="Enter destination postcode"
      />

      <Text mt="4" fontSize="lg" fontWeight="bold" italic>
        DATE
      </Text>

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        width="1/2"
        placeholder="Enter moving date"
      />

      <Text mt="4" fontSize="lg" fontWeight="bold" italic>
        ABOUT YOU
      </Text>

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        placeholder="Enter your name"
      />

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        placeholder="Enter your phone number"
      />

      <Input
        type="text"
        colorScheme="white"
        size="sm"
        placeholder="Enter your email"
      />

      <Button width="1/3" alignSelf="flex-end" m="2" colorScheme="black">
        Contact Me
      </Button>
    </VStack>
  );
}
