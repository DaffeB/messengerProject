import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CallScreen = () => {
    const [calls, setCalls] = useState([
        {
            id: 1,
            name: "Aley",
            date: 'Today, 11:32 AM',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 2,
            name: "Aley",
            date: 'Today, 9:32 AM',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 3,
            name: "Aley",
            date: 'Yesterday, 9:32 AM',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },

        {
            id: 4,
            name: 'Emeline',
            date: 'Jan 29',
            image: require('../../assets/images/users/woman.png'),
            status: 'incoming',
            icon: '',
        },
        {
            id: 5,
            name: 'Selma',
            date: 'Jan 22',
            image: require('../../assets/images/users/woman1.png'),
            status: 'outgoing',
            icon: '',
        },

        {
            id: 6,
            name: "Tiffany",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman3.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 7,
            name: "Tiffany",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman3.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 8,
            name: "Tiffany",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman3.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 9,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 10,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 11,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 12,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'outgoing',
            icon: '',
        },
        {
            id: 13,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'incoming',
            icon: '',
        },
        {
            id: 14,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 15,
            name: "Joana",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman2.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 16,
            name: "Joana",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman2.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 17,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 18,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 19,
            name: "Joana",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman2.png'),
            status: 'missed',
            icon: '',
        },
        {
            id: 20,
            name: 'Selma',
            date: 'Jan 22',
            image: require('../../assets/images/users/woman1.png'),
            status: 'outgoing',
            icon: '',
        },

        {
            id: 21,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'incoming',
            icon: '',
        },





    ]);

    const renderCall = ({ item }) => (

        <TouchableOpacity style={styles.callContainer}>
            <Image style={{ height: 30, width: 30, marginRight: 15 }} source={item.image}></Image>
            <View style={styles.leftContainer}>
                <View style={styles.itemContainer}>
                    <Image source={item.icon} style={styles.image} />
                    <View style={styles.infoContainer}>
                    </View>
                    {item.status === 'missed' && (
                        <View>
                            <Image style={{
                                width: 30,
                                height: 30
                            }} source={require('../../assets/icons/missedCall.png')} />
                            <Text style={styles.missedCallText}>Missed</Text>
                        </View>
                    )}
                    {item.status === 'incoming' && (
                        <View style={styles.incomingCallContainer}>
                            <Image style={{
                                width: 30,
                                height: 30
                            }} source={require('../../assets/icons/videoCamera.png')} />
                            <Text style={styles.incomingCallText}>Incoming</Text>
                        </View>
                    )}
                    {item.status === 'outgoing' && (
                        <View style={styles.outgoingCallContainer}>
                            <Image style={{
                                width: 30,
                                height: 30
                            }} source={require('../../assets/icons/missedCall.png')} />
                            <Text style={styles.outgoingCallText}>Outgoing</Text>
                        </View>
                    )}
                </View>

                <Text style={styles.name}>{item.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles[item.status]}>{item.status}</Text>
                    <View style={styles.circleIcon}></View>
                    <Text style={styles.date}>{item.date}</Text>
                    <Image />
                </View>
            </View>
            <View style={styles.rightContainer}>

            </View>
        </TouchableOpacity>


    );

    return (
        <FlatList
            data={calls}
            renderItem={renderCall}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = {
    callContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',

    },
    rightContainer: {
        justifyContent: 'center'
    },
    name: {
        fontWeight: 'bold'
    },
    date: {
        color: '#666'
    },
    missed: {
        color: 'red'
    },
    incoming: {
        color: 'green'
    },
    outgoing: {
        color: 'blue'
    },
    circleIcon:
        { borderWidth: 1, height: 4, width: 4, borderRadius: 4, backgroundColor: 'black' },


};

export default CallScreen;