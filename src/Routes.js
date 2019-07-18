import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';

import WelcomeScreen from './screens/Wellcome';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 600,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;

      return {
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, -width],
          }),
        }]
      };
    },
    containerStyle: {
      backgroundColor: 'transparent',
    },
  };
};
const Routes = createStackNavigator({
  WelcomeScreen,
  LoginScreen,
  SignUpScreen,
  HomeScreen
}, {
    headerMode: "none",
    initialRouteName: 'WelcomeScreen',
    transitionConfig: Platform.OS === 'android' ? transitionConfig : null
  });

export default createAppContainer(Routes);