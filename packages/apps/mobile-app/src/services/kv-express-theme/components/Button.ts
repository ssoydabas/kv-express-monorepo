import { type IButtonProps } from "native-base";

const solidVariant = ({ colorScheme }: IButtonProps): IButtonProps => {
  switch (colorScheme) {
    case "primary":
      return {
        bg: `${colorScheme}.400`,
        _text: {
          color: "darkText",
        },
        _pressed: {
          bg: `${colorScheme}.500`,
        },
        _icon: {
          color: "darkText",
        },
      };
    case "secondary":
      return {
        bg: `${colorScheme}.400`,
        _text: {
          color: "darkText",
        },
        _pressed: {
          bg: `${colorScheme}.500`,
        },
        _icon: {
          color: "darkText",
        },
      };
    default:
      return {
        bg: "gray.900",
        _text: {
          color: "lightText",
        },
        _icon: {
          color: "lightText",
        },
        _pressed: {
          bg: "gray.700",
        },
      };
  }
};

export const Button = {
  defaultProps: {
    variant: "solid",
    borderRadius: "2xl",
  } satisfies IButtonProps,
  sizes: {
    lg: {
      py: 2.5,
      _text: {
        fontSize: "lg",
        fontWeight: "medium",
      },
    },
    md: {
      py: 3,
      _text: {
        fontSize: "md",
      },
    },
    sm: {
      py: 2,
      _text: {
        fontSize: "sm",
      },
    },
  },
  variants: {
    solid: solidVariant,
  },
};

export const IconButton = {
  ...Button,
  defaultProps: {
    variant: "solid",
  },
};
