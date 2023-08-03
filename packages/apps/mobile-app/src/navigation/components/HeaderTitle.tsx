import { HStack, VStack, Text } from "native-base";

export default function HeaderTitle() {
  return (
    <HStack space="4" alignItems="center">
      <VStack width="100">
        <Text color="secondary" fontSize="md" textAlign="left">
          KV
        </Text>
        <Text color="secondary" fontSize="md" textAlign="right">
          Express
        </Text>
      </VStack>
    </HStack>
  );
}
