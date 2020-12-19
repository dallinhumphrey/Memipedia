import { StatusBar } from 'expo-status-bar';
import React from 'react';

import router from "./utils/router";
import { createAppContainer } from "react-navigation";
const AppContainer = createAppContainer(router);

export default function App() {
  return (
      <AppContainer />
  );
}


