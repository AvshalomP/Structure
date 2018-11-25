import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const MemberItem = ({ member }) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.text}>Name: {member.name}</Text>
                <Text style={styles.text}>Role: {member.role}</Text>
            </View>
            <Text style={styles.text}>Email: {member.email}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        borderTopColor: 'black',
        marginLeft: 10,
        marginTop: 10
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5
    }
});

export default MemberItem;