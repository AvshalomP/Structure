import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
//component
import ProjectItem from './ProjectItem';


class ProjectsList extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentProject: ""
        }
    }

    handleSelectedProject = (project) => {
        const { navigate } = this.props.navigation;
        navigate('Team');
        this.setState({currentProject: project})
    };

    render(){
        const projects = this.props.projects.map( (project, idx) => (
            <ProjectItem key={idx} project={project} onProjectSelection={this.handleSelectedProject.bind(this, project.name)}/>
        ));

        return(
            <ScrollView>
                { projects }
            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, null)(ProjectsList);