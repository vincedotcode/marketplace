import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux"; // Import Provider
import { useFonts } from "expo-font";
import Welcome from './screens/Welcome';
import Home from "./screens/Home";
import Details from "./screens/Details";
import Onboarding from "./screens/Onboarding";
import GetStarted from "./screens/GetStarted";
import Signin from "./screens/SignIn";
import store from './store/store';  // Ensure this is your store's correct path

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}> 
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
