import path from "path";
import modulesAlias from "module-alias";

modulesAlias.addAliases({
  "~api": path.resolve(__dirname, "../src/api"),
  "~api-root": path.resolve(__dirname, "../src"),
});
