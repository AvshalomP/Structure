import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
//components
import AddProjectForm from '../AddProjectForm';


class AddProject extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Add Project</Text>
                <AddProjectForm/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        padding: 30
    },
    title: {
        color: '#3f4b59',
        fontSize: 33,
        fontWeight: '800',
        paddingBottom: 20,
        alignSelf: 'center'
    }
});

export default AddProject;