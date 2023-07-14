/**
 * index.js
 */

import { AppRegistry } from 'react-native';
import Login from './src/screens/Login';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Login);
