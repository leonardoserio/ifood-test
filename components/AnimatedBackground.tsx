import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled(Animated.View)`
  flex:1;
`
export default AnimatedBackground;
