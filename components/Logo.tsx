import React from 'react';
import styled from 'styled-components/native';

const StyledLogo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

interface LogoProps {
    style: object;
}

const Logo: React.FC<LogoProps> = ({ style }) => (
    <StyledLogo
        source={require("@/assets/images/simbolo-consumer-branco.png")}
        style={style}
        resizeMode="contain"
    />
);

export default Logo;
