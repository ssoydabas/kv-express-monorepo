import { type IInputProps } from "native-base";

const filledVariant = ({ colorScheme }: IInputProps): IInputProps => {
  switch (colorScheme) {
    case "primary":
      return {
        bg: `${colorScheme}.200`,
        borderColor: `${colorScheme}.200`,
        shadow: 9,
        color: `black`,
        placeholderTextColor: "black",
      };
    case "secondary":
      return {
        bg: `${colorScheme}.200`,
        borderColor: `${colorScheme}.200`,
        shadow: 9,
        color: `black`,
        placeholderTextColor: "black",
      };
    case "dark":
      return {
        bg: "gray.700",
        borderColor: "gray.700",
        color: `${colorScheme}.700`,
      };

    case "white":
      return {
        bg: "white",
        borderColor: "white",
        color: `black`,
        placeholderTextColor: "black",
        shadow: "6",
        _focus: { bg: "white" },
      };
    case "gray":
      return {
        bg: `${colorScheme}.100`,
        borderColor: `${colorScheme}.900`,
        color: `${colorScheme}.700`,
      };
    default:
      return {
        bg: "gray.100",
      };
  }
};

export default {
  defaultProps: {
    borderRadius: "2xl",
    variant: "filled",
  },
  sizes: {
    md: {
      fontSize: "md",
      paddingTop: "11px",
      paddingBottom: "10px",
    },
    lg: {
      fontSize: "lg",
      paddingTop: "13px",
      paddingBottom: "13px",
    },
  },
  variants: {
    filled: filledVariant,
  },
};
