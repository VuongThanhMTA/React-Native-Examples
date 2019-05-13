import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, Dimensions,TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('screen');
export default class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: width, height: 56, borderWidth: 1, borderColor: 'gray' }}>

                </View>
                <Modal

                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <TouchableOpacity
                        onPress={() => this.setModalVisible(!this.state.modalVisible)}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.6)', marginTop: 56 }}>
                        <View
                            style={{ height: 200, width: '100%', backgroundColor: 'white', alignItems: 'center' }}>
                            <Text>Hello World!</Text>

                            <TouchableOpacity
                                style={{ width: width / 2 - 20, height: 50, borderWidth: 1, borderColor: 'gray' }}
                            // onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
                            >
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>

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