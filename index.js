/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Homepage from './screens/home';
import Login from './screens/login';
import Otp from './screens/otp';
import Register from './screens/register';
import Selectschool from './screens/selectschool';
import Slider from './screens/slider';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Otp);
// AppRegistry.registerComponent(appName, () => Register);
// AppRegistry.registerComponent(appName, () => Selectschool);
// AppRegistry.registerComponent(appName, () => Slider);
// AppRegistry.registerComponent(appName, () => Homepage);
