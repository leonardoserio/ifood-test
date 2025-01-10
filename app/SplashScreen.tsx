import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

const SplashScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const opacity = useSharedValue(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            opacity.value = withTiming(0, { duration: 1000 }, () => {
                runOnJS(setIsSplashVisible)(false);
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const [isSplashVisible, setIsSplashVisible] = React.useState(true);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    if (!isSplashVisible) {
        return <>{children}</>;
    }

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={[{ ...StyleSheet.absoluteFillObject }, animatedStyle]}>
                <SplashContainer>
                    <SplashText>Your App Name</SplashText>
                </SplashContainer>
            </Animated.View>
            {children}
        </View>
    );
};

const SplashContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #007AFF;
`;

const SplashText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

export default SplashScreen;

