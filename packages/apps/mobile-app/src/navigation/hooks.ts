import { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";

import type {
  RootStackParamList,
  RootStackNavigationProps,
  GenericRouteProp,
} from "./types";

export const useRootNavigation = () => {
  return useNavigation<RootStackNavigationProps>();
};

export const useGoBackToScreenCallback = <
  RouteName extends keyof RootStackParamList
>(
  args?: GenericRouteProp<RouteName>
) => {
  const [screen, params] = args ?? [];
  const navigation = useRootNavigation();

  const canGoBack = useMemo(
    () =>
      screen
        ? navigation.getState().routes.slice(1, -1)[0]?.name === screen
        : true,
    [navigation, screen]
  );

  return useCallback(() => {
    if (!args || canGoBack) {
      navigation.goBack();
    } else {
      navigation.replace<RouteName>(...args);
    }
  }, [canGoBack, navigation, screen, params]);
};
