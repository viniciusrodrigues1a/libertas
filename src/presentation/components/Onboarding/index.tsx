import React, { useContext, useRef, useEffect } from "react";
import { Animated, Easing, Text } from "react-native";
import { OnboardingContext } from "../../context/onboarding";

import {
  StyledModalView,
  StyledElevatedView,
  MessageBox,
  MessageBoxText,
  MessageBoxArrow,
} from "./styles";

const aimg = require("../../assets/chat-box-arrow.png");

type OnboardingModalViewProps = {
  children?: React.ReactNode;
};

type OnboardingElevatedViewProps = {
  children: React.ReactNode;
  lessonMessage: string;
};

let animInterval: any;
const Onboarding = {
  ModalView({
    children,
    ...rest
  }: OnboardingModalViewProps): React.ReactElement {
    const { hasUserSeenOnboardingElements } = useContext(OnboardingContext);

    return <StyledModalView {...rest}>{children}</StyledModalView>;
  },

  ElevatedView({
    children,
    lessonMessage,
    ...rest
  }: OnboardingElevatedViewProps): React.ReactElement {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      const animGrow = Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 400,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      });
      const animShrink = Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      });

      Animated.loop(Animated.sequence([animGrow, animShrink])).start();
    }, []);

    return (
      <StyledElevatedView
        style={{ transform: [{ scale: scaleAnim }] }}
        {...rest}
      >
        <>
          <MessageBox>
            <MessageBoxArrow source={aimg} />
            <MessageBoxText>{lessonMessage}</MessageBoxText>
          </MessageBox>
          {children}
        </>
      </StyledElevatedView>
    );
  },
};

export default Onboarding;
