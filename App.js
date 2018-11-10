import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Main from './src/components/Main';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar hidden={true}/>
          <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      height: '100%'
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
