import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/Router";
import { Provider } from "react-redux";
import { Store } from "./src/context/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
