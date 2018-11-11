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
        backgroundColor: 'yellow',
        color: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AddProject;