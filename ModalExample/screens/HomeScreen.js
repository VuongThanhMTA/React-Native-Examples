import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import AppStyles from '../theme';



export default class HomeScreen extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _renderModal() {
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
                <View>
                    <Text>Hello World!</Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text>Hide Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    }
    render() {
        return (
            <View style={AppStyles.container}>
                <View style={AppStyles.header}>
                    <Text style={AppStyles.titleText}>Home</Text>
                </View>
                {this._renderModal()}
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}