import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
//components
import Projects from '../screens/Projects';
import AddProject from '../screens/AddProject';


const NavFooter = state => createMaterialTopTabNavigator({
        Projects: {
            screen: props => <Projects {...props} {...state} />,
            navigationOptions: {
                tabBarLabel: 'Projects',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-folder" color={tintColor} size={24} />
                )
            }
        },
        Add: {
            screen: props => <AddProject {...props} {...state} />,
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
            activeTintColor: 'orange',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: '#fafafa',
                height: '9%',
                borderTopWidth: 0.3,
                borderTopColor: 'grey'
            },
            showIcon: true
        }
    });

export default NavFooter;