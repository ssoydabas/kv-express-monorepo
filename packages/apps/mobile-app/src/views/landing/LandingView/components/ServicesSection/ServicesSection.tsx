import { VStack, Text } from "native-base";

import { ServiceBulletsSection } from "./components";

export default function ServicesSection() {
  return (
    <VStack
      width="full"
      py="32"
      justifyContent="center"
      alignItems="center"
      space="16"
    >
      <Text fontSize="4xl" fontWeight="bold">
        OUR SERVICES
      </Text>

      <Text fontSize="2xl">
        With care and skill we offer the following services at affordable rates,
        good for your wallet and your convenience.
      </Text>

      <ServiceBulletsSection />
    </VStack>
  );
}
