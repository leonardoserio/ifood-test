import React from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';

const StyledBrandText = styled(Animated.Text)`
  font-size: 40px;
  font-weight: bold;
  font-family: 'PoppinsBold';
  color: ${Colors.white};
  margin-top: 10px;
`;

interface BrandTextProps {
  style: object;
}

const AnimatedBrandText: React.FC<BrandTextProps> = ({ style }) => (
  <StyledBrandText style={style}>consumer</StyledBrandText>
);

export default AnimatedBrandText;
