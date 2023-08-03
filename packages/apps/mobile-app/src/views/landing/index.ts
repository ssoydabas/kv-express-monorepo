import loadable from "@loadable/component";

export const LandingView = loadable(
  async () => await import(/* webpackChunkName: "Landing" */ "./LandingView")
);
