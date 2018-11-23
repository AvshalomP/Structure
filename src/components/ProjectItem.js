import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class ProjectItem extends Component {
    render(){
        const { project, onProjectSelection } = this.props;
        return(
            <View style={styles.project}>
                {/*<Image style={{width: '33%', height: '100%'}}*/}
                            {/*source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}*/}
                {/*/>*/}
                <Text style={styles.name}>{project.name}</Text>

                <TouchableOpacity onPress={onProjectSelection}>
                    <Icon name="ios-arrow-round-forward" color='#3f4b59' size={44}/>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    project: {
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
        marginLeft: 10
    }
});

export default ProjectItem;