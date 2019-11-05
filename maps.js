import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                latitude: 0,
                longitude: 0
            }
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
        Geolocation.getCurrentPosition((info) => {
            let location = {
                latitude: info.coords.latitude,
                longitude: info.coords.longitude
            }
            this.setState({
                location
            })
        });
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: this.state.location.latitude,
                        longitude: this.state.location.longitude,
                        latitudeDelta: 0.0055,
                        longitudeDelta: 0.00521,
                    }}
                    showsUserLocation={true}
                >

                </MapView>
                <View
                    style={{
                        bottom: 15,
                        position: 'absolute',//use absolute position to show button on top of the map
                        // top: '50%', //for center align
                        alignSelf: 'center' //for align to right
                    }}
                >
                    <TouchableOpacity
                        onPress={() => this.findCoordinates()}
                        style={{ backgroundColor: '#395fed', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 5 }}
                    >
                        <Text style={{ color: 'white' }}>Get my current location</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});  