import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default class Wellcome extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  }
})