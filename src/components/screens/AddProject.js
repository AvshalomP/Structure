import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


class AddProject extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>AddProject Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f8f8f8',
    }
});

export default AddProject;