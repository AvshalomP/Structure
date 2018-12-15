import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//components
import MemberForm from './MemberForm';
import Input from './Input';

class AddProjectForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: 1,
            project: { name: "", team: [{ product: [], id: 1 }] },
        }
    }

    handleAddMember = () => {
        let id = this.state.id + 1;
        let updatedTeam = [...this.state.project.team, { product: [], id }];
        this.setState({ project: { name: this.state.project.name, team: updatedTeam }, id})
    };

    handleRemoveMember = (id) => {
        const team = this.state.project.team.filter( (member) => member.id !== id );
        this.setState({ project: {name: this.state.project.name, team }})
    };


    render(){
        const { project } = this.state;
        let removeBtn = true;
        console.log("Render team: ", project.team);
        const memberForms = project.team.map( (member, idx, team) => {
            if(idx === team.length-1)
                removeBtn = false;
            return (<MemberForm key={member.id} removeBtn={removeBtn}
                                onRemoveMember={this.handleRemoveMember.bind(this, member.id)}/>)
        });

        return(
            <ScrollView>
                <Input text="Project Name" placeholder="Tracker"/>
                { memberForms }
                <TouchableOpacity onPress={this.handleAddMember}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="ios-add" color="#00a3e0" size={25}/>
                        <Text style={styles.addBtn}>Add Member</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
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