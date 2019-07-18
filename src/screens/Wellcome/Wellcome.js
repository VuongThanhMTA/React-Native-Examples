import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { USER_LOGIN } from '@gl/store/user/action';

class Wellcome extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userName: '',
    password: '',
  }


  onSignIn = () => {
    this.props._login(this.state)

    this.props.navigation.navigate('HomeScreen')
  }
  onChangeText = (text, name) => {
    this.setState({
      [name]: text,
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='name'
          onChangeText={(text) => this.onChangeText(text, 'userName')}
        />
        <TextInput
          style={styles.input}
          placeholder='pass'
          onChangeText={(text) => this.onChangeText(text, 'password')}
        />

        <TouchableOpacity onPress={this.onSignIn}>
          <Text> SignIn </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.user.userName,
  password: state.user.password
});

const mapDispatchToProps = dispatch => ({
  _login: (value) => dispatch(USER_LOGIN(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wellcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  }
})