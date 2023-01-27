import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable, onPress } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { GlobalStyles } from '../const/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const DATA = [

    {
        id: 1,
        username: "Aley",
        img: require('../assets/images/users/man.png'),
        text: "Are you there",
        timeOfMessage: 'Now'
    },
    {
        id: 2,
        username: "Tiana",
        img: require('../assets/images/usersMessages/woma1.png'),
        text: "I will be there",
        timeOfMessage: '42m'
    },
    {
        id: 3,
        username: "Tifanny",
        img: require('../assets/images/usersMessages/woma2.png'),
        text: "Gotta you",
        timeOfMessage: '2h'
    },
    {
        id: 4,
        username: "Pressy",
        img: require('../assets/images/usersMessages/mal3.png'),
        text: "Absolutely yes ",
        timeOfMessage: '2:43am'
    },

    {
        id: 5,
        username: 'Trey',
        img: require('../assets/images/users/man1.png'),
        text: "Yes, of course!",
        timeOfMessage: '1am'
    },
    {
        id: 6,
        username: 'Emeline',
        img: require('../assets/images/users/woman.png'),
        text: ":)",
        timeOfMessage: 'Yesterday'
    },
    {
        id: 7,
        username: 'Selma',
        img: require('../assets/images/users/woman1.png'),
        text: "Hhahaha",
        timeOfMessage: 'Tuesday'
    },
    {
        id: 8,
        username: 'Jeana',
        img: require('../assets/images/users/woman2.png'),
        text: "Ok",
        timeOfMessage: 'Tuesday'
    },
    {
        id: 9,
        username: 'Tiffany',
        img: require('../assets/images/users/woman3.png'),
        text: "Love you",
        timeOfMessage: 'Monday'
    },



]












const Messages = ({ route }) => {
    const navigation = useNavigation();

    return (

        <View>
            <FlatList
                data={DATA}

                style={{ height: '77%' }}
                renderItem={({ item }) => {
                    return (

                        <View style={{ alignItems: 'center', marginRight: 30, flexDirection: 'row', paddingHorizontal: 16, marginBottom: 15 }}>

                            <View>
                                <Image key={item.id} source={item.img} style={{ width: 50, height: 50, marginRight: 10 }} />
                            </View>
                            <View>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('FriendsMessages', { userName: item.username })}>


                                    <Text style={{ color: 'black', marginTop: 5, fontWeight: '500', fontSize: 16 }}>{item.username}</Text>
                                    <View style={{ flexDirection: 'row', fontSize: 14, lineHeight: 25 }}>
                                        <Text style={{ fontWeight: '300', marginRight: 10 }}>{item.text}</Text>
                                        <Text style={{ fontWeight: '300', color: GlobalStyles.colors.greyFive }}>{item.timeOfMessage}</Text>
                                    </View>

                                </TouchableOpacity>

                            </View>

                        </View>


                    )
                }}
                keyExtractor={item => item.id}

            />
            <View><TouchableOpacity><Text>hahaaaaaaaaaaaaaaa</Text></TouchableOpacity></View>
        </View >

    );
};

export default Messages
const styles = StyleSheet.create({})



// import { useNavigation } from '@react-navigation/native';

// function ChatList({ users }) {
//     const navigation = useNavigation();

//     return (
//         <FlatList
//             data={users}
//             renderItem={({ item }) => (
//                 <TouchableOpacity onPress={() => navigation.navigate('Messages', { userId: item.id })}>
//                     <Text>{item.name}</Text>
//                 </TouchableOpacity>
//             )}
//         />
//     );
// }