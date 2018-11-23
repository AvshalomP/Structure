import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const DepartmentItem = ({department, onDepartmentExtend}) => {
    return (
        <View style={styles.department}>
            <Text style={styles.name}>{department}</Text>
            <TouchableOpacity onPress={onDepartmentExtend}>
                <Icon name="ios-arrow-down" color='#3f4b59' size={26}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    department: {
        borderWidth: 0.5,
        borderColor: '#dedede',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20
    },
    name: {
        color: '#3f4b59',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 5
    }
});

export default DepartmentItem;