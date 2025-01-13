import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Easing,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import AnimatedBackground, { Content } from '@/components/AnimatedBackground';
import LogoContainer from '@/components/LogoContainer';
import AnimatedBrandText from '@/components/AnimatedBrandText';
import ContentWrapper from '@/components/ContentWrapper';
import InfoContainer, { Description, Title } from '@/components/InfoContainer';
import DividerLine from '@/components/DividerLine';
import AnimatedLogo from '@/components/AnimatedLogo';
import StyledAnimatedLinearGradient from '@/components/AnimatedLinearGradient';
import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';
const { height, width } = Dimensions.get('window');

const AnimatedWelcome: React.FC = () => {
    const splashAnimation = useSharedValue<number>(0);
    const logoAnimation = useSharedValue(0);
    const brandTextAnimation = useSharedValue<number>(0);
    const loginFadeIn = useSharedValue<number>(0);

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            logoAnimation.value = withTiming(1, {
                duration: 1500,
                easing: Easing.out(Easing.exp),
            });
        }, 1000);

        setTimeout(() => {
            splashAnimation.value = withTiming(1, {
                duration: 2000,
                easing: Easing.out(Easing.exp),
            });
        }, 2500);
        setTimeout(() => {
            brandTextAnimation.value = withTiming(1, {
                duration: 1000,
                easing: Easing.out(Easing.exp),
            });
        }, 2000);
        setTimeout(() => {
            loginFadeIn.value = withTiming(1, { duration: 2000, easing: Easing.out(Easing.exp) });
        }, 3200);
    }, []);

    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(splashAnimation.value, [0, 1], [height, 310]),
        };
    });


    const logoStyle = useAnimatedStyle(() => {
        return {
            width: interpolate(logoAnimation.value, [0, 1], [190, 120]),
            height: interpolate(logoAnimation.value, [0, 1], [190, 120]),
            transform: [
                {
                    translateY: interpolate(
                        logoAnimation.value,
                        [0, 1],
                        [0, -height / 3 + 40]
                    ),
                },
            ],
        };
    });
    const brandTextStyle = useAnimatedStyle(() => {
        return {
            opacity: brandTextAnimation.value,
            transform: [
                {
                    translateY: interpolate(
                        brandTextAnimation.value,
                        [0, 20],
                        [-height / 3, -height / 3 + 100]
                    ),
                },
            ],
        };
    });
    const loginStyle = useAnimatedStyle(() => {
        return {
            opacity: loginFadeIn.value,
            backgroundColor: Colors.white
        };
    });

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AnimatedHeader style={headerStyle}>
                <AnimatedBackground >
                    <StyledAnimatedLinearGradient />
                </AnimatedBackground>

            </AnimatedHeader>
            <LogoContainer>
                <AnimatedLogo style={logoStyle} />
                <AnimatedBrandText style={brandTextStyle} />
            </LogoContainer>

            <ContentWrapper >
                <Content style={loginStyle}>
                    <Title>Bem-vindo ao{'\n'}Consumer APP!</Title>
                    <Description>
                        O Consumer APP foi desenvolvido para funcionar junto com uma assinatura premium do Consumer.
                    </Description>
                    <Button text='INICIAR' onPress={() => { router.navigate("/(auth)") }} />
                    <DividerLine />
                    <InfoContainer />
                </Content>
            </ContentWrapper>
        </GestureHandlerRootView>
    );
};

export default AnimatedWelcome;
const AnimatedHeader = styled(Animated.View)`
  width: ${width}px;
  background-color:${Colors.white};
  justify-content: center;
  align-items: center;
`;
