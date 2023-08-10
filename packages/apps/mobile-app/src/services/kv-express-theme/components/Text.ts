import type { ITextProps } from "native-base";

const colorfulTextVariant = ({ colorScheme }: ITextProps): ITextProps => {
  switch (colorScheme) {
    case "primary":
      return {
        color: `${colorScheme}.600`,
      };
    case "secondary":
      return {
        color: `${colorScheme}.400`,
      };
    default:
      return {
        color: "gray.500",
      };
  }
};

export default {
  defaultProps: {
    variant: "custom",
  },
  sizes: {
    lg: {
      fontSize: "xl",
    },
    md: {
      fontSize: "md",
    },
    sm: {
      fontSize: "sm",
    },
  },
  variants: {
    colorful: colorfulTextVariant,
  },
};
