import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const MemberItem = ({ member }) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={[styles.text, styles.bold]}>Name:</Text>
                <Text style={styles.text}>{member.name},</Text>
                <Text style={[styles.text, styles.bold]}>Role:</Text>
                <Text style={styles.text}>{member.role}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={[styles.text, styles.bold]}>Email:</Text>
                <Text style={styles.text}>{member.email}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderLeftWidth: 7,
        borderLeftColor: '#ff6657',
        marginLeft: 10,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 10
    },
    text: {
        color: 'black',
        fontSize: 15,
        padding: 5
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default MemberItem;