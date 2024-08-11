import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Jobs from "./Jobs";
import FavoriteJobs from "./FavoriteJobs";

const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Jobs"
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
        drawerLabelStyle: {
          color: "#F2545B", 
          fontWeight: "bold",
        },
        drawerActiveTintColor: "#F2545B",
        drawerActiveBackgroundColor: "rgba(242, 84, 91, 0.2)",
      }}
    >
      <Drawer.Screen
        name="Jobs"
        component={Jobs}
        options={{
          title: "Jobs",
          headerTintColor: "#F2545B",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      />
      <Drawer.Screen
        name="FavoriteJobs"
        component={FavoriteJobs}
        options={{
          title: "FavoriteJobs",
          headerTintColor: "#F2545B",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default Root;
