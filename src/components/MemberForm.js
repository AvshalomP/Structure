import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//components
import Input from './Input';
import Dropdown from './Dropdown';


class MemberForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: '',
        }
    }

    updateUser = (user) => {
        this.setState({ user: user })
    };

    render(){
        const { removeBtn, onRemoveMember } = this.props;
        const dropDownOptions = ['Product', 'QA', 'Dev', 'Design', 'Other'];

        return(
            <View style={styles.container}>
                <Text style={[{color: '#3f4b59', fontSize: 15}, styles.bold, styles.headline]}>Team</Text>
                <Text style={[styles.text, styles.bold]}>Department</Text>
                <Dropdown options={dropDownOptions}/>
                <Input text="Member Name" placeholder="Sam" product={this.props.product}/>
                <Input text="Role" placeholder="FE developer"/>
                <Input text="Email" placeholder="sam@ap.com"/>
                { removeBtn &&
                    <TouchableOpacity onPress={onRemoveMember}>
                        <Text style={styles.removeBtn}>Remove</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        borderLeftWidth: 4,
        borderLeftColor: '#70849e',
        paddingLeft: 15,
        marginBottom: 15,
    },
    text: {
        color: '#3f4b59',
        fontSize: 15,
        marginTop: 15
    },
    bold: {
        fontWeight: 'bold'
    },
    removeBtn: {
        fontSize: 17,
        marginTop: 5,
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    }
});

export default MemberForm;