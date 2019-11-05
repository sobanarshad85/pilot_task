import React, { Component } from 'react';
import {
    View, Text,
    SafeAreaView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Splash from './splash';
import Geolocation from '@react-native-community/geolocation';


const splash = new Splash();
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null
        };

    }

    componentDidMount() {
        this.findCoordinates();
    }

    findCoordinates = async () => {
        // await navigator.geolocation.getCurrentPosition(
        //     position => {
        //         const location = JSON.stringify(position);

        //         this.setState({ location });
        //     },
        //     error => Alert.alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        // );
        Geolocation.getCurrentPosition(info => console.warn(info));
    };

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
                        this.props.navigation.navigate('SplashScreen')
                    }}
                >
                    <Text style={{ color: '#395fed' }}>Log out</Text>

                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
