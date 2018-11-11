import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


class Projects extends Component {
    handlePress = (screen) => {
        const { navigate } = this.props.navigation;
        navigate(screen);
    };

    render(){
        return(
            <View style={styles.container}>
                <Text onPress={this.handlePress.bind(this, 'Add')}>Projects Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       height: '100%',
       backgroundColor: 'green',
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
});

export default Projects;