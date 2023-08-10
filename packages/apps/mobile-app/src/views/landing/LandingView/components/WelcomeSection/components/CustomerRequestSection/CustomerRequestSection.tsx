import { VStack, Text } from "native-base";

import CalendarSection from "./CalendarSection/CalendarSection";

export default function CustomerRequestSection() {
  return (
    <VStack space="6" px="4" py="16" borderRadius="16">
      <VStack>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
          style={{
            textShadowColor: "black",
            textShadowRadius: 32,
            textShadowOffset: { width: 2, height: 2 },
          }}
        >
          Need an appointment?
        </Text>

        <Text
          fontSize="xl"
          textAlign="center"
          color="white"
          style={{
            textShadowColor: "black",
            textShadowRadius: 32,
            textShadowOffset: { width: 2, height: 2 },
          }}
        >
          Please choose the day you want to move
        </Text>
      </VStack>

      <CalendarSection />
    </VStack>
  );
}
