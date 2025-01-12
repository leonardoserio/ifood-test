import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import Label from '@/components/Label';
import AnimatedBackground from '@/components/AnimatedBackground';
import LogoContainer from '@/components/LogoContainer';
import AnimatedBrandText from '@/components/AnimatedBrandText';
import ContentWrapper from '@/components/ContentWrapper';
import { StyledLinkText } from '@/components/InfoContainer';
import DividerLine from '@/components/DividerLine';
import AnimatedLogo from '@/components/AnimatedLogo';
import StyledAnimatedLinearGradient from '@/components/AnimatedLinearGradient';
import { FooterText, FormContainer, Input, Title, } from './login.style';
import Button from '@/components/Button';
import Space from '@/components/Space';
import { Colors } from '@/constants/Colors';
const { height, width } = Dimensions.get('window');

const Login: React.FC = () => {

    const router = useRouter();
    const headerStyle = {
        height: 310,
    };

    const logoStyle = {
        width: 120,
        height: 120,
        transform: [{ translateY: -height / 3 + 40 }],
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AnimatedHeader style={headerStyle}>
                <AnimatedBackground >
                    <StyledAnimatedLinearGradient />
                </AnimatedBackground>

            </AnimatedHeader>
            <LogoContainer>
                <AnimatedLogo style={logoStyle} />
                <AnimatedBrandText style={{ opacity: 1, transform: [{ translateY: -height / 3 }] }} />
            </LogoContainer>

            <ContentWrapper >
                <Space horizontal={40} />
                <Title>Entrar no Consumer APP</Title>
                <FormContainer>
                    <Input placeholder="Usuário" placeholderTextColor={Colors.black} />
                    <Input placeholder="Senha" placeholderTextColor={Colors.black} secureTextEntry />
                    <Space horizontal={30} />
                    <Button onPress={() => router.navigate("/(tabs)")} text='ENTRAR' />
                    <Space horizontal={30} />
                    <DividerLine />
                    <FooterText>
                        Utilize um usuário e senha cadastrados no Consumer Desktop.{" "}
                        <StyledLinkText>Veja aqui.</StyledLinkText>
                    </FooterText>
                </FormContainer>

            </ContentWrapper>
        </GestureHandlerRootView >
    );
};

export default Login;

const AnimatedHeader = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;
