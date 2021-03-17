import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import YouthAchievementPage from "./src/screens/YouthAchievementPage";
import YouthProfilePage from "./src/screens/YouthProfilePage";
import ElderlyDetail from "./src/screens/ElderlyDetail";
import ElderlyChatroom from "./src/screens/ElderlyChatroom";
import ElderlyChatlist from "./src/screens/ElderlyChatlist";
import ElderlyBadgesPage from "./src/screens/ElderlyBadgesPage";
import YouthDetail from "./src/screens/YouthDetail";
import YouthChatroom from "./src/screens/YouthChatroom";
import YouthChatlist from "./src/screens/YouthChatlist";
import Onboarding1 from "./src/screens/Onboarding1";
import Onboarding2 from "./src/screens/Onboarding2";
import Onboarding3 from "./src/screens/Onboarding3";
import Choose from "./src/screens/Choose";
import YouthFilterOverlay from "./src/screens/YouthFilterOverlay";
import ElderlyProfilePage from "./src/screens/ElderlyProfilePage";

const DrawerNavigation = createDrawerNavigator({
  YouthAchievementPage: YouthAchievementPage,
  YouthProfilePage: YouthProfilePage,
  ElderlyDetail: ElderlyDetail,
  ElderlyChatroom: ElderlyChatroom,
  ElderlyChatlist: ElderlyChatlist,
  ElderlyBadgesPage: ElderlyBadgesPage,
  YouthDetail: YouthDetail,
  YouthChatroom: YouthChatroom,
  YouthChatlist: YouthChatlist,
  Onboarding1: Onboarding1,
  Onboarding2: Onboarding2,
  Onboarding3: Onboarding3,
  Choose: Choose,
  YouthFilterOverlay: YouthFilterOverlay,
  ElderlyProfilePage: ElderlyProfilePage
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    YouthAchievementPage: YouthAchievementPage,
    YouthProfilePage: YouthProfilePage,
    ElderlyDetail: ElderlyDetail,
    ElderlyChatroom: ElderlyChatroom,
    ElderlyChatlist: ElderlyChatlist,
    ElderlyBadgesPage: ElderlyBadgesPage,
    YouthDetail: YouthDetail,
    YouthChatroom: YouthChatroom,
    YouthChatlist: YouthChatlist,
    Onboarding1: Onboarding1,
    Onboarding2: Onboarding2,
    Onboarding3: Onboarding3,
    Choose: Choose,
    YouthFilterOverlay: YouthFilterOverlay,
    ElderlyProfilePage: ElderlyProfilePage
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([Font.loadAsync({})]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
