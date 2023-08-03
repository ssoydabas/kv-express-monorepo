import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LandingView } from "~root/views";

import { type RootStackParamList } from "./types";

import HeaderTitle from "./components/HeaderTitle";
import HeaderRightIcon from "./components/HeaderRightIcon";
import { navigationBarColor } from "~root/services/kv-express-theme/colors";

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const SHOW_HEADER = false;

  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: navigationBarColor,
        },
        headerShown: SHOW_HEADER,
      }}
    >
      <StackNavigator.Group
        screenOptions={{
          headerTitle: () => <HeaderTitle />,
          headerTitleAlign: "center",
          headerRight: () => <HeaderRightIcon />,
        }}
      >
        <StackNavigator.Screen name="Landing" component={LandingView} />
      </StackNavigator.Group>
    </StackNavigator.Navigator>
  );
}
