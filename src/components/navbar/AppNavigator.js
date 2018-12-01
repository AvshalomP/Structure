import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//components
import ProjectsNavigator from '../navbar/ProjectsNavigator';
import AddProject from '../screens/AddProject';

const styles = { tabColor: '#3f4b59' };

const AppNavigator = createMaterialTopTabNavigator({
        Projects: {
            screen: ProjectsNavigator,
            navigationOptions: {
                tabBarLabel: 'Projects',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-folder" color={tintColor} size={24} />
                )
            }
        },
        Add: {
            screen: AddProject,
            navigationOptions: {
                tabBarLabel: 'Add Project',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-add" color={tintColor} size={30} />
                )
            }
        }
    },
    {//router config
        navigationOptions: {
            tabBarPosition: 'bottom'
        },
        tabBarOptions: {
            activeTintColor: styles.tabColor,
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'white',
                height: '9%',
                borderTopWidth: 1,
                borderTopColor: styles.tabColor
            },
            indicatorStyle: {
                backgroundColor: styles.tabColor
            },
            showIcon: true
        }
    });

export default AppNavigator;