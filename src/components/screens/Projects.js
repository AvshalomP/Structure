import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


class Projects extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Projects screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       height: '100%',
    }
});

export default Projects;