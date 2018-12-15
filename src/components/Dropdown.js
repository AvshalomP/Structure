import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';


class Dropdown extends Component{
    constructor(props){
        super(props);

        this.state = {
            departmentColor: '#c4c4c4'
        }
    }

    onDepartmentSelect = (department) => {
        this.setState({ department, departmentColor: 'black' })
    };

    render() {
        const { options } = this.props;
        const { departmentColor } = this.state;
        return (
            <View style={styles.dropdownContainer}>
                <ModalDropdown dropdownStyle={styles.dropdownStyle} dropdownTextStyle={styles.dropdownTextStyle}
                               style={{borderWidth: 0}} onSelect={(idx, value) => this.onDepartmentSelect(value)}
                               options={options}>
                    <View style={styles.dropdownContent}>
                        <Text style={{fontSize: 15, color: departmentColor}}>Please select a department...</Text>
                        <Icon name="ios-arrow-down" color="#3f4b59" size={25}/>
                    </View>
                </ModalDropdown>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    dropdownContainer: {
        marginBottom: 20,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#b9b9b9',
    },
    dropdownStyle: {
        width: '84%',
        marginTop: 5,
        paddingHorizontal: 25,
        borderWidth: 1, borderColor:
            '#d4d4d4'
    },
    dropdownTextStyle: {
        color: '#3f4b59',
        fontSize: 17,
        fontWeight: '600',
        paddingVertical: 15
    },
    dropdownContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});



export default Dropdown;