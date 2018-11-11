import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      height: '100%'
  },
});

export default App;
