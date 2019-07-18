import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux'



class Home extends Component {

  onHomePress = () => {
    this.props.navigation.navigate('HomeScreen')
  }

  render() {
    return (
      <View style={styles.container}>

        <Text> {this.props.userName} </Text>
        <Text> {this.props.password} </Text>
        <Text> {this.props.email} </Text>
        <TouchableOpacity>
          <Text> Log Out </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.user.userName,
  password: state.user.password,
  email: state.user.email
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  }
})