import React from 'react';
import { createStackNavigator } from 'react-navigation';
//components
import Projects from '../screens/Projects';
import Team from '../screens/Team';

const ProjectsNavigator = createStackNavigator({
    Projects: { screen: Projects,
        navigationOptions: ({header: null})
    },
    Team: { screen: props => <Team {...props} params={props.navigation.state.params} />,
        navigationOptions: ({header: null})
    }
});


export default ProjectsNavigator;