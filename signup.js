import React, { Component, Fragment } from 'react';
import {
    View, Text,
    SafeAreaView, TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Splash from './splash';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Sign Up</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Fragment>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput
                                            style={{
                                                // flex:1,
                                                borderColor: 'black',
                                                // borderWidth: 1,
                                                marginTop: 10,
                                                borderRadius: 5,
                                                color: 'black',
                                                width: '90%',
                                                height: 50,
                                                minHeight: 50,
                                                backgroundColor: '#f9f9f9'
                                            }}
                                            // onBlur={() => setFieldTouched('email')}
                                            // value={{}}
                                            keyboardType='email-address'
                                            placeholder="Enter Your Full Name"
                                            onChangeText={(text) => console.warn(text)}
                                        />
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput
                                            style={{
                                                // flex:1,
                                                borderColor: 'black',
                                                // borderWidth: 1,
                                                marginTop: 10,
                                                borderRadius: 5,
                                                color: 'black',
                                                width: '90%',
                                                height: 50,
                                                minHeight: 50,
                                                backgroundColor: '#f9f9f9'
                                            }}
                                            // onBlur={() => setFieldTouched('email')}
                                            // value={{}}
                                            keyboardType='email-address'
                                            placeholder="Enter Your E-mail"
                                            onChangeText={(text) => console.warn(text)}
                                        />
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput
                                            style={{
                                                // flex:1,
                                                marginTop: 10,
                                                borderColor: 'black',
                                                // borderWidth: 1,
                                                borderRadius: 5,
                                                color: 'black',
                                                width: '90%',
                                                height: 50,
                                                minHeight: 50,
                                                backgroundColor: '#f9f9f9'
                                            }}
                                            // onBlur={() => setFieldTouched('email')}
                                            // value={{}}
                                            secureTextEntry={true}
                                            keyboardType='email-address'
                                            placeholder="Enter Your Password"
                                            onChangeText={(text) => console.warn(text)}
                                        />
                                    </View>

                                    <View style={{ width: '90%', flexDirection: 'row', marginTop: 10 }}>
                                        <TouchableOpacity
                                            style={{ backgroundColor: '#395fed', width: '100%', height: 50, borderRadius: 5, justifyContent: 'center' }}
                                            onPress={() => {
                                                Toast.show('You Have Signed Up')
                                                this.props.navigation.navigate('SignInScreen')}}>

                                            <Text style={{ textAlign: 'center', color: 'white' }}>Sign up for free</Text>

                                        </TouchableOpacity>
                                    </View>
                                </Fragment>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 16 }}>Already have an account?</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignInScreen')}>
                                    <Text style={{ fontSize: 16, color: '#395fed', marginLeft: 10, }}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
