import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    indexSelected: 0,
    id: '1',
    data: [
      {
        id: '1',
        name: '1',
        isSelected: true
      },
      {
        id: '2',
        name: '2',
        isSelected: false
      },
      {
        id: '3',
        name: '3',
        isSelected: false
      },
      {
        id: '4',
        name: '4',
        isSelected: false
      },
    ]
  }



  _onPressLogOut = () => {
    this.props.navigation.navigate('WelcomeScreen')
  }

  _keyExtractor = (item, index) => `${index}`;

  _onPressItem(item, index) {

    item.isSelected = !item.isSelected;

    const { indexSelected } = this.state
    console.log('old indexSelected', indexSelected)

    this.state.data[index] = item;

    if (index !== indexSelected) {
      this.state.data[indexSelected].isSelected = false;
    }

    this.setState({
      data: this.state.data,
      indexSelected: index,
      id: `${item.id}`
    })
    console.log('this.state.indexSelected', this.state.id)

  }

  _renderItem = ({ item, index }) => {
    // console.log('renderItem', item)
    const style = item.isSelected ? styles.itemSelected : styles.item;
    return (
      <TouchableOpacity
        onPress={() => this._onPressItem(item, index)}
        style={[{ width: width, height: 20, alignItems: 'center', justifyContent: 'center', margin: 5 }, style]}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  _renderList() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.state.data}
        extraData={this.state}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>

        {this._renderList()}

        <Text> {this.props.userName} </Text>
        <Text> {this.props.password} </Text>
        <Text> {this.props.email} </Text>
        <TouchableOpacity onPress={this._onPressLogOut}>
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
  },
  item: {
    backgroundColor: 'white'
  },
  itemSelected: {
    backgroundColor: 'green'
  }

})