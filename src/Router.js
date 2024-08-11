import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Root from "./pages/Root";
import JobDetails from "./pages/JobDetails";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={Root}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{
          headerTintColor: "#F2545B",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
          headerBackTitle: "Jobs",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
