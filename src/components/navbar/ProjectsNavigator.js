import React from 'react';
import { createStackNavigator } from 'react-navigation';
//components
import Projects from '../screens/Projects';
import ProjectTeam from '../screens/ProjectTeam';

const ProjectsNavigator = createStackNavigator({
    Projects: { screen: Projects,
        navigationOptions: ({header: null})
    },
    Team: { screen: props => <ProjectTeam {...props} params={props.navigation.state.params} />,
        navigationOptions: ({header: null})
    }
});


export default ProjectsNavigator;