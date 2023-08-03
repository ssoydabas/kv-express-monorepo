import { HStack } from "native-base";

import { GreetingSection, ContactFormSection } from "./components";

export default function MainLandingSection() {
  return (
    <HStack justifyContent="space-around" py="12">
      <GreetingSection />
      <ContactFormSection />
    </HStack>
  );
}
