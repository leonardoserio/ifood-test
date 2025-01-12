import React from 'react';
import styled from 'styled-components/native';

const StyledLogoContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

interface LogoContainerProps {
  children: React.ReactNode;
}

const LogoContainer: React.FC<LogoContainerProps> = ({ children }) => (
  <StyledLogoContainer>{children}</StyledLogoContainer>
);

export default LogoContainer;
