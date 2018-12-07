import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
//components
import Input from './Input';


class MemberForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: '',
            department: 'Please select department...',
            departmentColor: '#c4c4c4'
        }
    }

    updateUser = (user) => {
        this.setState({ user: user })
    };

    onDepartmentSelect = (department) => {
        this.setState({ department, departmentColor: 'black' })
    };

    render(){
        const { removeBtn } = this.props;
        const { department, departmentColor } = this.state;

        return(
            <View>
                <Input text="Project Name" placeholder="Tracker"/>
                <Text style={[styles.text, styles.bold, styles.headline]}>Team</Text>
                <Text style={[styles.text, styles.bold]}>Department</Text>
                <View style={ styles.dropdownContainer }>
                        <ModalDropdown dropdownStyle={styles.dropdownStyle} dropdownTextStyle={styles.dropdownTextStyle}
                                       style={{borderWidth: 0}} onSelect={(idx, value) => this.onDepartmentSelect(value)}
                                       options={['Product', 'QA', 'Dev', 'Design', 'Other']}>
                        <View style={styles.dropdownContent} textStyle={styles.dropdown}>
                            <Text style={{ fontSize: 15, color: departmentColor }}>{department}</Text>
                            <Icon name="ios-arrow-down" color="#3f4b59" size={25}/>
                        </View>
                    </ModalDropdown>
                </View>
                <Input text="Member Name" placeholder="Sam"/>
                <Input text="Role" placeholder="FE developer"/>
                <Input text="Email" placeholder="sam@ap.com"/>
                { removeBtn &&
                    <TouchableOpacity>
                        <Text style={styles.removeBtn}>Remove</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        color: '#3f4b59',
        fontSize: 15,
        marginTop: 15
    },
    bold: {
        fontWeight: 'bold'
    },
    input: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 25
    },
    removeBtn: {
        fontSize: 17,
        marginTop: 5,
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
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

export default MemberForm;