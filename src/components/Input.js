import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            borderBottomColor: '#b9b9b9',
            inputText: ""
        }
    }

    onFocus = () => {
        this.setState({ borderBottomColor: '#00a3e0' })
    };

    onBlur = () => {
        this.setState({ borderBottomColor: '#b9b9b9' })
    };

    render() {
        const { text, placeholder } = this.props;
        const { borderBottomColor } = this.state;

        return (
            <View>
                <Text style={[styles.text, styles.bold]}>{text}</Text>
                <TextInput style={[styles.input, { borderBottomColor }]} onFocus={this.onFocus}
                           onBlur={this.onBlur} placeholder={`e.g. ${placeholder}`} value={this.state.inputText}
                           onChangeText={(text1) => this.setState({ inputText: text1 })}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        color: '#3f4b59',
        fontSize: 15,
    },
    bold: {
        fontWeight: 'bold'
    },
    input: {
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 5,
        marginBottom: 25
    }
});

export default Input;