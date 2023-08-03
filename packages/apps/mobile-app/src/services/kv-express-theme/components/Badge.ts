import { type IBadgeProps } from "native-base";

const vibrantVariant = ({ colorScheme }: IBadgeProps): IBadgeProps => {
  switch (colorScheme) {
    case "primary":
    case "secondary":
    case "green":
    case "red":
    case "yellow":
    case "orange":
    case "teal":
    case "cyan":
    case "blue":
    case "purple":
    case "pink":
    case "rose":
    case "emerald":
    case "lime":
    case "amber":
    case "blueGray":
    case "warmGray":
    case "trueGray":
    case "coolGray":
    case "gray":
      return {
        bg: `${colorScheme}.300`,
        borderRadius: "full",
      };
    case "light":
      return {
        bg: "gray.50",
        borderRadius: "full",
      };
    case "white":
      return {
        bg: "white",
        borderRadius: "full",
      };
    case "dark":
    case "black":
    default:
      return {
        bg: "black",
        borderRadius: "full",
        _text: {
          color: "lightText",
        },
      };
  }
};

export default {
  variants: {
    vibrant: vibrantVariant,
  },
};
