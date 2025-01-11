import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Easing,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Label from '@/components/Label';
import LabelBold from '@/components/LabelBold';
const { height, width } = Dimensions.get('window');
const AnimatedLogo = Animated.createAnimatedComponent(styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`);
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
                        [-height / 3, -height / 3 + 100] // Exibe o texto abaixo do logo
                    ),
                },
            ],
        };
    });
    const loginStyle = useAnimatedStyle(() => {
        return {
            opacity: loginFadeIn.value, // Aplica o efeito de fade
            backgroundColor: "white"
        };
    });

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AnimatedHeader style={headerStyle}>
                <AnimatedBackground >
                    <AnimatedLinearGradient
                        colors={['#79BBCC', '#EA102F']}
                        start={{ x: 0, y: 0.1 }}
                        end={{ x: 0.7, y: 1 }}
                        locations={[0, 1]}
                        style={[
                            {
                                flex: 1,
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,

                            },
                        ]}
                    ><View></View></AnimatedLinearGradient>
                </AnimatedBackground>

            </AnimatedHeader>
            <LogoContainer>
                <AnimatedLogo
                    source={require("@/assets/images/simbolo-consumer-branco.png")}
                    style={logoStyle}
                    resizeMode="contain"
                />
                <AnimatedBrandText style={brandTextStyle}>consumer</AnimatedBrandText>
            </LogoContainer>

            <ContentWrapper >
                <Content style={loginStyle}>
                    <Title>Bem-vindo ao{'\n'}Consumer APP!</Title>

                    <Description>
                        O Consumer APP foi desenvolvido para funcionar junto com uma assinatura premium do Consumer.
                    </Description>

                    <StartButton onPress={() => { router.navigate("/(tabs)") }}>
                        <ButtonText>INICIAR</ButtonText>
                    </StartButton>
                    <DividerLine />
                    <InfoContainer>
                        <InfoText>Saiba mais sobre o Consumer APP. </InfoText>
                        <LinkText>Veja aqui.</LinkText>
                    </InfoContainer>
                </Content>
            </ContentWrapper>
        </GestureHandlerRootView>
    );
};

export default AnimatedWelcome;

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const ContentWrapper = styled.View`
  flex: 1;
  padding: 32px;
  background-color:white;
`;
const Content = styled(Animated.View)`
flex:1;
`

const LogoContainer = styled.View`

    position:absolute;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
  align-items: center;
  justify-content: center; 


`;

const AnimatedBrandText = styled(Animated.Text)`
  font-size: 40px;
  font-weight: bold;
  font-family:'PoppinsBold';
  color: #fff;
  margin-top: 10px;
`;

const Title = styled(Label)`
  
  font-size: 32px;
  line-height:48px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top:38px;
`;

const Description = styled(Label)`
  font-size: 17px;
  line-height:26px;
`;

const StartButton = styled.TouchableOpacity`
margin-top:65px;
  background-color: #222121;
  border-radius: 8px;
  height:65px;
  width: 100%;
  align-items: center;
  justify-content:center;
  margin-bottom: 24px;
`;

const ButtonText = styled(LabelBold)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top:20px;
  justify-content:center;
`;

const InfoText = styled(Label)`
  color: #555555;
  font-size: 15px;
`;

const LinkText = styled.Text`
  color: #555555;
  font-size: 15px;
  text-decoration: underline;
`;

const DividerLine = styled.View`
    height:1px;
    width:100%;
    background-color:#D3D3D4;
    
`
const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const AnimatedHeader = styled(Animated.View)`
  width: ${width}px;
  background-color: #6200ee;
  justify-content: center;
  align-items: center;
`;
