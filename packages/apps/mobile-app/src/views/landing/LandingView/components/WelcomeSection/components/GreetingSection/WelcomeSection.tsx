/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VStack, Image, Text, Button } from "native-base";

import { useWindowDimensions } from "~root/services/window-dimensions";

import Logo from "../../../../../../../../assets/logo.png";
import PhoneIcon from "~root/components/icons/PhoneIcon";

export default function WelcomeSection() {
  const { width } = useWindowDimensions();
  return (
    <VStack width="40%">
      <Image
        source={Logo}
        style={{
          width: width / 2,
          height: 60,
          resizeMode: "contain",
        }}
      />

      <Text mx="12" mt="20" fontSize="5xl" color="white">
        Need support with{"\n"}moving to another place?
      </Text>

      <Text mx="12" mt="12" fontSize="2xl" color="white">
        We at Kringloop Vrienden fully relieve you of all your moving needs.
        {"\n"}
        Renting and moving materials or deploying moving workers?{"\n"}Our team
        is at your service for technical support and service.
      </Text>

      <Button
        size="md"
        width="full"
        m="12"
        bg="#fe7f03"
        rightIcon={<PhoneIcon />}
        onPress={() => {
          console.log("BUTTON PRESSED!");
        }}
      >
        Get In Touch
      </Button>
    </VStack>
  );
}
