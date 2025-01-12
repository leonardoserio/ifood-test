import React from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const StyledLogo = styled(Animated.Image)`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`;

interface LogoProps {
    style: object;
}

const AnimatedLogo: React.FC<LogoProps> = ({ style }) => (
    <StyledLogo
        source={require("@/assets/images/simbolo-consumer-branco.png")}
        style={style}
        resizeMode="contain"
    />
);

export default AnimatedLogo;
