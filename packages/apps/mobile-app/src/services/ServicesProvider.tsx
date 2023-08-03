import type { ReactNode } from "react";

import { KvExpressThemeProvider } from "./kv-express-theme";
import { NavigationProvider } from "./navigation";
import { ReactQueryProvider } from "./react-query";

export interface ServicesProviderProps {
  children: ReactNode;
}

export default function ServicesProvider({ children }: ServicesProviderProps) {
  return (
    <ReactQueryProvider>
      <KvExpressThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </KvExpressThemeProvider>
    </ReactQueryProvider>
  );
}
