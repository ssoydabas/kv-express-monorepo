import type { PathConfigMap } from "@react-navigation/native";
import type { RootStackParamList } from "./types";

export const screens: PathConfigMap<RootStackParamList> = {
  Landing: "/",
};

export const initialRouteName: keyof RootStackParamList = "Landing";

export const config = {
  initialRouteName,
  screens,
};
