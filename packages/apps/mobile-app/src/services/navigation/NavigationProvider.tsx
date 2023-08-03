import { type ReactNode } from "react";

import {
  NavigationContainer,
  type Theme,
  type LinkingOptions,
} from "@react-navigation/native";

import { useTheme } from "native-base";

import { config as navigationConfig } from "../../navigation/config";

import { type RootStackParamList } from "../../navigation/types";

const documentTitle = {
  enabled: false,
};

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    "https://kv-express.com",
    "https://*.kv-express.com",
    "kv-express://",
  ],
  config: navigationConfig,
};

export interface NavigationProviderProps {
  children: ReactNode;
}

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  const theme = useTheme();

  const navigationTheme: Theme = {
    dark: false,
    colors: {
      background: theme.colors.gray[50],
      border: theme.colors.gray[200],
      card: theme.colors.white,
      primary: theme.colors.primary[500],
      text: theme.colors.darkText,
      notification: theme.colors.primary[500],
    },
  };

  return (
    <NavigationContainer
      documentTitle={documentTitle}
      linking={linking}
      theme={navigationTheme}
    >
      {children}
    </NavigationContainer>
  );
}
