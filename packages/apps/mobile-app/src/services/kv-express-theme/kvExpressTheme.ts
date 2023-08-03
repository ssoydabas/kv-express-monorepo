import { extendTheme } from "native-base";

import * as colors from "./colors";
import * as shadows from "./shadows";
import * as components from "./components";

export const KvExpressTheme = extendTheme({
  colors: { ...colors },
  shadows: { ...shadows },
  components: { ...components },
});

export type KvExpressThemeType = typeof KvExpressTheme;
