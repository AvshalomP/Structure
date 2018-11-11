import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchProjects } from '../../store/actions/projects'

//components
import ProjectList from '../ProjectsList';


class Projects extends Component {
    componentDidMount(){
        //load all projects
        this.props.fetchProjects();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Projects</Text>
                <ProjectList navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        padding: 10
    },
    title: {
        color: '#3f4b59',
        fontSize: 35,
        fontWeight: 'bold',
        paddingBottom: 20
    }
});

function mapStateToProps(state){
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, { fetchProjects })(Projects);