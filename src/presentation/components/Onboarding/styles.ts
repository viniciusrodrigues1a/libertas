import { Animated } from "react-native";
import styled from "styled-components/native";

export const StyledModalView = styled.View`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const StyledElevatedView = styled(Animated.View)`
  position: relative;
  z-index: 9999999;
  width: 100%;
  height: 200px;
`;

export const MessageBox = styled.View`
  margin: 0 auto;
  background: #d5d5d5;
  width: 60%;
  border-radius: 4px;
  padding: 20px;
  position: relative;
`;

export const MessageBoxArrow = styled.Image`
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: -22px;
  left: 6%;
`;

export const MessageBoxText = styled.Text`
  text-align: center;
`;
