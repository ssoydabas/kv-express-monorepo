import { ImageBackground } from "react-native";
import { VStack, Text } from "native-base";

import { useWindowDimensions } from "~root/services/window-dimensions";

import BackgroundImage from "../../../../../../assets/images/white-brick-wall.png";
import { AdvantageBulletItem } from "./components";

const ourAdvantages = [
  "Customization",
  "Transparent",
  "Simple and Fast",
  "Efficient and Reliable",
  "Multiple Services under one roof",
];

export default function AdvertisementSection() {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      source={{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        uri:
          BackgroundImage ??
          "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png",
      }}
      style={{
        width,
        height: (5 / 6) * height,
      }}
    >
      <VStack space="4" px="32" py="16">
        <Text fontSize="3xl">Why us?</Text>
        <Text fontSize="5xl" fontWeight="bold">
          All our advantage at a glance:
        </Text>

        {ourAdvantages.map((advantage) => (
          <AdvantageBulletItem text={advantage} />
        ))}
      </VStack>
    </ImageBackground>
  );
}
