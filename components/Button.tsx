import React from 'react';
import styled from 'styled-components/native';
import LabelBold from './LabelBold';
import { Colors } from '@/constants/Colors';

const StyledButton = styled.TouchableOpacity`
  
  background-color:${Colors.darkGray};
  border-radius: 8px;
  height: 65px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const StyledButtonText = styled(LabelBold)`
  color: ${Colors.white};
  font-size: 16px;
  
`;

interface ButtonProps {
  onPress: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, text = "INICIAR" }) => (
  <StyledButton onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </StyledButton>
);

export default Button;
