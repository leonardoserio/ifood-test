import React from 'react';
import { Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import AnimatedBackground from '@/components/AnimatedBackground';
import LogoContainer from '@/components/LogoContainer';
import ContentWrapper from '@/components/ContentWrapper';
import { StyledLinkText } from '@/components/InfoContainer';
import DividerLine from '@/components/DividerLine';
import StyledAnimatedLinearGradient from '@/components/AnimatedLinearGradient';
import { AnimatedHeader, BrandText, FooterText, FormContainer, Input, Title, } from './index.style';
import Button from '@/components/Button';
import Space from '@/components/Space';
import { Colors } from '@/constants/Colors';
import Logo from '@/components/Logo';

const Login: React.FC = () => {

    const router = useRouter();
    const headerStyle = {
        height: 310,
    };

    const logoStyle = {
        width: 120,
        height: 120,
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AnimatedHeader style={headerStyle}>
                <AnimatedBackground >
                    <StyledAnimatedLinearGradient />
                </AnimatedBackground>
                <LogoContainer>
                    <Logo style={logoStyle} />
                    <BrandText>consumer</BrandText>
                </LogoContainer>
            </AnimatedHeader>

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