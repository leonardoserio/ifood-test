import React from 'react';
import styled from 'styled-components/native';
import Label from './Label';
import { Colors } from '@/constants/Colors';
import LabelBold from './LabelBold';

const StyledInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const StyledInfoText = styled.Text`
  color:${Colors.mediumGray};
  font-size: 15px;
`;

export const StyledLinkText = styled.Text`
  color:${Colors.mediumGray};
  font-size: 15px;
  text-decoration: underline;
`;

export const Title = styled(LabelBold)`
  font-size: 32px;
  line-height:48px;
  margin-bottom: 16px;
  margin-top:38px;
`;

export const Description = styled(Label)`
  font-size: 17px;
  line-height:26px;
  margin-bottom:65px;
`;

const InfoContainer: React.FC = () => (
  <StyledInfoContainer>
    <StyledInfoText>Saiba mais sobre o Consumer APP. </StyledInfoText>
    <StyledLinkText>Veja aqui.</StyledLinkText>
  </StyledInfoContainer>
);

export default InfoContainer;
