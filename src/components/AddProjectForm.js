import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//components
import MemberForm from './MemberForm';

class AddProjectForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            project: { name: "", team: [] },
            membersCount: 1
        }
    }

    handleAddMember = (event) => {

    };

    render(){
        // const members = this.state.membersCount.

        return(
            <ScrollView>
                <MemberForm removeBtn={false}/>
                <TouchableOpacity onPress={this.handleAddMember}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="ios-add" color="#00a3e0" size={25}/>
                        <Text style={styles.addBtn}>Add Member</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => true}>
                    <Text style={styles.submitBtn}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 15,
    },
    bold: {
        fontWeight: 'bold'
    },
    headline: {
        color: '#3f4b59',
        fontSize: 25
    },
    input: {
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 25
    },
    addBtn: {
        fontSize: 17,
        paddingLeft: 10,
        color: '#00a3e0',
        fontWeight: 'bold',
    },
    submitBtn: {
        color: 'white',
        backgroundColor: '#3f4b59',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#3f4b59',
        overflow: 'hidden',
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60
    }
});


export default AddProjectForm;