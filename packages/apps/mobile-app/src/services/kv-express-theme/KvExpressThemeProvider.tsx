import { type ReactNode } from "react";
import { NativeBaseProvider } from "native-base";

import { KvExpressTheme } from "./kvExpressTheme";

export interface KvExpressThemeProviderProps {
  children: ReactNode;
}

export default function KvExpressThemeProvider({
  children,
}: KvExpressThemeProviderProps) {
  return (
    <NativeBaseProvider theme={KvExpressTheme}>{children}</NativeBaseProvider>
  );
}
