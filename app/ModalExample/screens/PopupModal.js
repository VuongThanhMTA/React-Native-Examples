import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, Dimensions, TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('screen');
export default class PopupModal extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ width: width, height: 56, borderWidth: 1, borderColor: 'gray' }}>

                </View>
                <Modal

                    animationType="none"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <TouchableOpacity
                        onPress={() => this.setModalVisible(!this.state.modalVisible)}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', padding: 20 }}>
                        <TouchableWithoutFeedback>
                            <View
                                style={{
                                    height: 400,
                                    width: width - 40,
                                    backgroundColor: 'white'
                                }}
                            >
                                <View style={{ width: width - 40, height: 50, justifyContent: 'center' }}>
                                    <Text style={{ color: 'black', fontSize: 18, margin: 20 }}>Payment</Text>
                                </View>
                                <View style={{ width: width - 40, height: 1, backgroundColor: 'gray', }} />

                                <View style={{ width: width - 40, height: 120, padding: 20, }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', margin: 5 }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'gray', marginRight: 10, justifyContent: 'center', alignItems: 'center' }} >
                                            <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'black' }} />
                                        </View>
                                        <Text style={{ color: 'black' }}>Gamelancer funds ($0)</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ flexDirection: 'row', margin: 5 }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'gray', marginRight: 10, justifyContent: 'center', alignItems: 'center' }} >
                                            <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'white' }} />
                                        </View>
                                        <Text style={{ color: 'black' }}>Payal</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row', margin: 5 }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'gray', marginRight: 10, justifyContent: 'center', alignItems: 'center' }} >
                                            <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'white' }} />
                                        </View>
                                        <Text style={{ color: 'black' }}>Credit card</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: width - 40, height: 45, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <View style={{ width: 200, height: 45, borderRadius: 5, borderWidth: 1, borderColor: 'gray' }}></View>
                                </View>
                                <View style={{ width: width - 40, height: 45, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <View style={{ width: 200, height: 45, borderRadius: 5, borderWidth: 1, borderColor: 'gray' }}></View>
                                </View>

                                <View style={{ width: width - 40, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                    <TouchableOpacity
                                        style={{ width: width - 60, height: 50, borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}
                                    // onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
                                    >
                                        <Text>Pay</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </TouchableOpacity>
                </Modal>

                <TouchableOpacity
                    style={{ width: width / 2, height: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'gray', margin: 10 }}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}