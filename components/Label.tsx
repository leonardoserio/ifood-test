// Label.tsx
import React from 'react';
import styled from 'styled-components/native';
import { Text, TextProps } from 'react-native';

// Estilo do componente Label
const StyledLabel = styled(Text)`
  font-size: 16px; 
  color: #333; 
  font-family: 'Poppins'; 
`;

// Definindo as props do componente Label
interface LabelProps extends TextProps {
    children: React.ReactNode; // Permite passar qualquer conteúdo como filho
}

// Componente Label
const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    );
};

export default Label;
