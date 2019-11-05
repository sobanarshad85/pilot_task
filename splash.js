import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getAsyncStorage = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null || value !== '') {
                return value
            }
        }
        catch (e) {
            // error reading value
        }
    }

    setAsyncStorage = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
        }
    }

    removeAsyncStorage = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            // saving error
        }
    }

    checkToken = async () => {
        // await this.removeAsyncStorage('token')
        const token = await this.getAsyncStorage('token')
        if (!token) {
            this.props.navigation.navigate('LoginStack')
        }
        else {
            this.props.navigation.navigate('AppStack')
        }
    }

    async componentDidMount() {
        setTimeout(() => {
            this.checkToken();    
        }, 1000);
        
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Splash Screen </Text>
                </View>
            </SafeAreaView>
        );
    }
}
