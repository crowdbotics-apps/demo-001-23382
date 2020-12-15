import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps185607Navigator from '../features/Maps185607/navigator';
import Settings185585Navigator from '../features/Settings185585/navigator';
import Settings185570Navigator from '../features/Settings185570/navigator';
import NotificationList185569Navigator from '../features/NotificationList185569/navigator';
import Maps185568Navigator from '../features/Maps185568/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps185607: { screen: Maps185607Navigator },
Settings185585: { screen: Settings185585Navigator },
Settings185570: { screen: Settings185570Navigator },
NotificationList185569: { screen: NotificationList185569Navigator },
Maps185568: { screen: Maps185568Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
