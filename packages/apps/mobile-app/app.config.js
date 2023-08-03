if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

module.exports = {
  expo: {
    name: "kv-express",
    slug: "kv-express-mobile-app",
    version: "1.0.0",
    scheme: "kv-express",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.anonymous.kv-express-mobile-app",
      infoPlist: {
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true,
        },
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      name: "kv-express",
      shortName: "kv-express",
      lang: "en-US",
      favicon: "./assets/favicon.png",
    },
  },
};
