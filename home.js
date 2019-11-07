import React, { Component } from 'react';
import {
    View, Text,
    SafeAreaView
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Splash from './splash';
import Toast from 'react-native-simple-toast';
import SearchInput, { createFilter } from 'react-native-search-filter';


const KEYS_TO_FILTERS = ['name', 'subject'];

const splash = new Splash();
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'sadfdsaf',
            data: [
                {
                    name: 'soban',
                    subject: 'abs'
                },
                {
                    name: 'faizan',
                    subject: 'dba'
                },
                {
                    name: 'rehan',
                    subject: 'absf'
                },
                {
                    name: 'zohaib',
                    subject: 'bbo'
                },
                {
                    name: 'talha',
                    subject: 'door'
                },
            ]
        };

    }

    searchUpdated(term) {
        if (term.length<=3) {
            term='%&-'
            this.setState({searchTerm:term})
        }
        if (term.length >= 4) {
            this.setState({ searchTerm: term })
        }
    }

    render() {
        // const filteredEmails = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ flex: 2, justifyContent: 'center', }}>
                    {/* <TextInput
                        onChangeText={(term) => { this.searchUpdated(term) }}
                        style={{
                            padding: 10,
                            borderColor: '#CCC',
                            borderWidth: 1
                        }}
                        placeholder="Type a message to search"
                    />
                    {
                        filteredEmails.map((item, index) => {
                            console.warn(item);
                            return (
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.subject}</Text>
                                </View>
                            )
                        })
                    } */}
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
