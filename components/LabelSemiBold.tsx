import React from 'react';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import { Colors } from '@/constants/Colors';

const StyledLabel = styled.Text`
  font-size: 16px; 
  color: ${Colors.darkGray}; 
  font-family: 'PoppinsSemiBold'; 
`;

interface LabelProps extends TextProps {
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    );
};

export default Label;
