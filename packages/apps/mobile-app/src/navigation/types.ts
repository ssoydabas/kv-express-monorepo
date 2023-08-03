import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  Landing: undefined;
};

export type RouteName = keyof RootStackParamList;

export type GenericRouteProp<T extends RouteName> =
  undefined extends RootStackParamList[T]
    ? [screen: T] | [screen: T, params: RootStackParamList[T]]
    : [screen: T, params: RootStackParamList[T]];

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
