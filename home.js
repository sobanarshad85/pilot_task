import React, { Component } from 'react';
import {
    View, Text,
    SafeAreaView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Splash from './splash';
import Toast from 'react-native-simple-toast';



const splash = new Splash();
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ flex: 2, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}> Hello word! </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}> You are signed in </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MapsScreen')}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#395fed' }}>Go to maps</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ marginBottom: 20 }}
                    onPress={async () => {
                        await splash.removeAsyncStorage('token')
                        Toast.show('You Are Logged Out')
                        this.props.navigation.navigate('SplashScreen')
                    }}
                >
                    <Text style={{ color: '#395fed' }}>Log out</Text>

                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
