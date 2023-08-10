import { HStack } from "native-base";

import { GreetingSection, CustomerRequestSection } from "./components";

export default function MainLandingSection() {
  return (
    <HStack justifyContent="space-around" px="24" py="12">
      <GreetingSection />
      <CustomerRequestSection />
    </HStack>
  );
}
