import React from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const StyledGradient = styled(AnimatedLinearGradient).attrs<LinearGradientProps>(() => ({
  colors: [Colors.lightBlue, Colors.red],
  start: { x: 0, y: 0.1 },
  end: { x: 0.7, y: 1 },
  locations: [0, 1],
}))`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledAnimatedLinearGradient: React.FC = () => {
  return <StyledGradient />
};

export default StyledAnimatedLinearGradient;
