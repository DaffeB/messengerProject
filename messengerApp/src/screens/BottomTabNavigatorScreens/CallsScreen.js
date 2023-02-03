import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CallScreen = () => {
    const [calls, setCalls] = useState([
        {
            id: 1,
            name: "Aley (2)",
            date: 'Today, 11:32 AM',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 2,
            name: "Aley",
            date: 'Today, 9:32 AM',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 3,
            name: "Aley",
            date: 'Yesterday, 9:32 AM',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed ',
            icon: '',
        },

        {
            id: 4,
            name: 'Emeline (1)',
            date: 'Jan 29',
            image: require('../../assets/images/users/woman.png'),
            status: 'Incoming',
            icon: '',
        },
        {
            id: 5,
            name: 'Selma',
            date: 'Jan 22',
            image: require('../../assets/images/users/woman1.png'),
            status: 'Outgoing',
            icon: '',
        },

        {
            id: 6,
            name: "Tiffany",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman3.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 7,
            name: "Tiffany",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman3.png'),
            status: 'Incoming',
            icon: '',
        },
        {
            id: 8,
            name: "Tiffany",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman3.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 9,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 10,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 11,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 12,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Outgoing',
            icon: '',
        },
        {
            id: 13,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Incoming',
            icon: '',
        },
        {
            id: 14,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 15,
            name: "Joana",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman2.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 16,
            name: "Joana (4)",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman2.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 17,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 18,
            name: "Aley",
            date: 'Jan 4',
            image: require('../../assets/images/users/man.png'),
            status: 'Missed',
            icon: '',
        },
        {
            id: 19,
            name: "Joana",
            date: 'Jan 12',
            image: require('../../assets/images/users/woman2.png'),
            status: 'Missed ',
            icon: '',
        },
        {
            id: 20,
            name: 'Selma',
            date: 'Jan 22',
            image: require('../../assets/images/users/woman1.png'),
            status: 'Outgoing',
            icon: '',
        },

        {
            id: 21,
            name: "Aley",
            date: 'November 23',
            image: require('../../assets/images/users/man.png'),
            status: 'Incoming',
            icon: '',
        },





    ]);

    const renderCall = ({ item }) => (

        <TouchableOpacity style={styles.callContainer}>
            <Image style={{ height: 30, width: 30, marginRight: 15 }} source={item.image}></Image>
            <View style={styles.leftContainer}>

                <Text style={styles.name}>{item.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.itemContainer}>
                        <Image source={item.icon} style={styles.image} />
                        <View style={styles.infoContainer}>
                        </View>
                        {item.status === 'Missed' && (
                            <View>
                                <Image style={styles.iconsCall} source={require('../../assets/icons/rejected.png')} />

                            </View>
                        )}
                        {item.status === 'Incoming' && (
                            <View style={styles.incomingCallContainer}>
                                <Image style={styles.iconsCall} source={require('../../assets/icons/incommingCall.png')} />
                            </View>
                        )}
                        {item.status === 'Missed ' && (
                            <View style={styles.incomingCallContainer}>
                                <Image style={styles.iconsCall} source={require('../../assets/icons/videoCamera.png')} />
                            </View>
                        )}
                        {item.status === 'Outgoing' && (
                            <View style={styles.outgoingCallContainer}>
                                <Image style={styles.iconsCall} source={require('../../assets/icons/outgoingCall.png')} />
                            </View>
                        )}
                    </View>

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
        fontWeight: 'bold',
        marginBottom: 7
    },
    date: {
        color: '#666'
    },
    Missed: {
        color: 'red'
    },
    Incoming: {
        color: '#495057'
    },
    Putgoing: {
        color: '#495057'
    },
    circleIcon:
        { borderWidth: 1, borderColor: '#adb5bd', height: 4, width: 4, borderRadius: 4, backgroundColor: '#adb5bd', marginRight: 7, marginLeft: 7, marginTop: 5 },

    iconsCall: {
        width: 13,
        height: 13,
        marginRight: 7
    }
};

export default CallScreen;