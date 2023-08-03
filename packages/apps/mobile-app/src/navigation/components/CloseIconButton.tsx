import { IconButton } from "native-base";

import { useGoBackToScreenCallback } from "../hooks";
import type { RouteName, GenericRouteProp } from "../types";

import CloseIcon from "~root/components/icons/CloseIcon";

export interface CloseIconProps<T extends RouteName> {
  routeArgs?: GenericRouteProp<T>;
  color?: string;
}

export default function CloseIconButton<T extends RouteName>({
  routeArgs,
  color = "white",
}: CloseIconProps<T>) {
  const goBack = useGoBackToScreenCallback(routeArgs);

  return (
    <IconButton
      colorScheme="light"
      padding="3"
      icon={<CloseIcon color={color} />}
      onPress={goBack}
    />
  );
}
