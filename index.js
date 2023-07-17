/**
 * index.js
 */

import { AppRegistry } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { name as appName } from './app.json';



const EatSum = () => {
    return <AppNavigation />;
};

AppRegistry.registerComponent(appName, () => EatSum);
