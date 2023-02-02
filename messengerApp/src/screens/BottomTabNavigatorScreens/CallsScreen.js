import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CallScreen = () => {
    const [calls, setCalls] = useState([
        {
            id: 1,
            name: "Aley",
            date: 'Today, 9:32 AM',
            status: 'missed'
        },
        {
            id: 2,
            name: "Aley",
            date: 'Today, 9:32 AM',
            status: 'missed'
        },
        {
            id: 3,
            name: "Aley",
            date: 'Yesterday, 9:32 AM',
            status: 'missed'
        },

        {
            id: 4,
            name: 'Tiana',
            date: 'Jan 29',
            status: 'incoming'
        },
        {
            id: 5,
            name: 'Tifanny',
            date: 'Jan 22',
            status: 'outgoing'
        },
        {
            id: 6,
            name: "Aley",
            date: 'Jan 12',
            status: 'missed'
        },
        {
            id: 7,
            name: "Aley",
            date: 'Jan 4',
            status: 'missed'
        },
    ]);

    const renderCall = ({ item }) => (
        <ScrollView>
            <TouchableOpacity style={styles.callContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles[item.status]}>{item.status}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        <Image />
                    </View>
                </View>
                <View style={styles.rightContainer}>

                </View>
            </TouchableOpacity>
        </ScrollView>

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
        justifyContent: 'center'
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
    }
};

export default CallScreen;