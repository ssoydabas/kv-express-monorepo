import { type ReactNode } from "react";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useWindowDimensions } from "~root/services/window-dimensions";

import BackgroundImage from "../../../../../../assets/images/workers.jpg";

interface IBackgroundImageComponentProps {
  children: ReactNode;
}

export default function BackgroundImageComponent({
  children,
}: IBackgroundImageComponentProps) {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      source={{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        uri:
          BackgroundImage ??
          "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png",
      }}
      resizeMode="cover"
      style={{
        width,
        height: (5 / 6) * height,
      }}
    >
      <LinearGradient
        colors={["#00000000", "#000000"]}
        start={[2, 0.1]}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.99,
        }}
      >
        {children}
      </LinearGradient>
    </ImageBackground>
  );
}
