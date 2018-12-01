import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//components
import MemberItem from './MemberItem';


const DepartmentItem = ({name, team, onToggle, info}) => {
    const iconName = info ? "ios-remove" : "ios-add";
    const teamInfo = team.map( (member, idx) => (
        <MemberItem key={idx} member={member}/>
    ));

    return (
        <View style={styles.department}>
            <View style={styles.departmentHeader}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity onPress={onToggle}>
                    <Icon name={iconName} color='#3f4b59' size={30}/>
                </TouchableOpacity>
            </View>
            { info && teamInfo }
        </View>
    )
};

const styles = StyleSheet.create({
    department: {
        borderWidth: 0.5,
        borderColor: '#dedede',
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20
    },
    departmentHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: '#3f4b59',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    }
});

export default DepartmentItem;