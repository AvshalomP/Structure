import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
//components
import AppNavigator from './navbar/AppNavigator';


class Main extends Component {
    render(){
        return(
            <Provider store={configureStore()}>
                <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
                    <SafeAreaView />
                    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
                        <AppNavigator />
                    </SafeAreaView>
                </View>
            </Provider>
        )
    }
}

export default Main;