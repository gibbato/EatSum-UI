/**
 * index.js
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';



const EatSum = () => <App />;

AppRegistry.registerComponent(appName, () => EatSum);