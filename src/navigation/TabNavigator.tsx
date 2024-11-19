import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Image } from "react-native";
import Profile from "../screens/Profile";
import { Text } from "react-native-paper";
import colors from "../themes/colors";
import Activity from "../screens/Activity";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Activity"
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                  backgroundColor: colors.white,
                  height: 60,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  position: 'absolute',
                  overflow: 'hidden',
                },
                headerShown: false,
              }}
              
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image
                            source={require('../assets/icons/home.png')}
                            style={{
                                width: 17.23,
                                height: 17.25,
                                tintColor: focused ? colors.primary : colors.gray_500
                            }} />;
                    },
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{
                            fontSize: 12,
                            color: focused ? colors.primary : colors.gray_500,
                            marginBottom: 5,
                        }}>
                            Início
                        </Text>;
                    }
                }}
            >
            </Tab.Screen>
            <Tab.Screen 
                name="Activity"
                component={Activity}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image
                            source={require('../assets/icons/run.png')}
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: focused ? colors.primary : colors.gray_500
                            }} />;
                    },
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{
                            fontSize: 12,
                            color: focused ? colors.primary : colors.gray_500,
                            marginBottom: 5,
                        }}>
                            Atividade
                        </Text>;
                    }
                }}
            >
            </Tab.Screen>
            <Tab.Screen 
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image
                            source={require('../assets/icons/profile.png')}
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: focused ? colors.primary : colors.gray_500
                            }} />;
                    },
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{
                            fontSize: 12,
                            color: focused ? colors.primary : colors.gray_500,
                            marginBottom: 5,
                        }}>
                            Perfil
                        </Text>;
                    }
                }}
            >
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default TabNavigator;