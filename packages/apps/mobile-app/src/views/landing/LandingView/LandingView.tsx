import { ScrollView, Divider } from "native-base";

import {
  BackgroundImageComponent,
  WelcomeSection,
  ServicesSection,
  CatalogSection,
  AdvertisementSection,
} from "./components";

export default function LandingView() {
  return (
    <ScrollView backgroundColor={"#f3f3f3"}>
      <BackgroundImageComponent>
        <WelcomeSection />
      </BackgroundImageComponent>

      <ServicesSection />
      <Divider />
      <CatalogSection />
      <Divider />
      <AdvertisementSection />
    </ScrollView>
  );
}
