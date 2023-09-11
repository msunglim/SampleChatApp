import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import IntroScreen from './src/screens/Intro/IntroScreen';
import Navigator from './src/navigation/Navigator';

const ProvideNavigator = () => {
    return (
        <Navigator />
    )
}
AppRegistry.registerComponent(appName, () => ProvideNavigator);