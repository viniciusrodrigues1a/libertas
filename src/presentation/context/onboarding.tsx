import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
type OnboardingContextProps = {
  hasUserSeenOnboardingElements: boolean;
  userAlreadyCompletedOnboarding: () => void;
};

export const OnboardingContext = createContext({} as OnboardingContextProps);

export const OnboardingProvider: React.FC = ({ children }) => {
  const [hasUserSeenOnboardingElements, setHasUserSeenOnboardingElements] =
    useState(false);

  useEffect(() => {
    (async () => {
      const gettingItem = await AsyncStorage.getItem("userCompletedOnboarding");
      if (gettingItem) {
        setHasUserSeenOnboardingElements(true);
      }
    })();
  });

  const userAlreadyCompletedOnboarding = () =>
    setHasUserSeenOnboardingElements(true);

  return (
    <OnboardingContext.Provider
      value={{ hasUserSeenOnboardingElements, userAlreadyCompletedOnboarding }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
