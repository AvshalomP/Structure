import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//components
import TeamList from '../TeamList';

class Team extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Team</Text>
                <TeamList/>
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
        fontSize: 33,
        fontWeight: 'bold',
        paddingBottom: 20
    }
});


export default Team;