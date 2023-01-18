

import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { Image } from 'react-native';
import { GlobalStyles } from '../const/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';


const CHATMESSAGES = [

    {
        id: 1,
        username: "Aley",
        message: "Hi Tiana",
        messageTwo: "Are you there"
    },

    {
        id: 2,
        username: "Tiana",
        message: "Hi Aley",

    },
    {
        id: 3,
        username: "Aley",
        message: "What are you doing",
    },
    {
        id: 4,
        username: "Tiana",
        message: "Can you please tell me the time?",

    },
    {
        id: 5
    }


]



const FriendsMessages = ({ }) => {


    return (

        <View>
            <FlatList
                data={CHATMESSAGES}
                horizontal={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            {/* Aley messages  */}
                            <View style={{ flexDirection: 'row', height: 40, width: 100 }}>
                                <View>{item.id === 1 && <Image style={{ width: 30, height: 30, marginLeft: 16, marginTop: 16, marginRight: 10 }} source={require('../assets//images/users/man.png')} />}</View>
                                <View>

                                    <View style={{ borderRadius: 10, height: 25, backgroundColor: GlobalStyles.colors.greySix, justifyContent: 'center', marginTop: 20 }}>
                                        {item.id === 1 && <Text style={{ paddingHorizontal: 6 }}>{item.message}</Text>}
                                    </View>


                                    <View style={{ borderRadius: 10, height: 25, backgroundColor: GlobalStyles.colors.greySix, justifyContent: 'center', marginTop: 20, paddingTop: 0 }}>
                                        {item.id === 1 && <Text style={{ paddingHorizontal: 6 }}>{item.messageTwo}</Text>}
                                    </View>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row-reverse', marginLeft: 10 }}>
                                <View style={{ height: 25, backgroundColor: GlobalStyles.colors.greenFour, borderRadius: 10, justifyContent: 'center' }}>
                                    <Text>{item.id === 2 && <Text style={{ paddingHorizontal: 6 }}>{item.message}</Text>}</Text>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: 16 }}>
                                <View style={{ borderRadius: 10, backgroundColor: GlobalStyles.colors.greySix, width: 150, justifyContent: 'center', paddingHorizontal: 6 }}>
                                    {item.id === 3 && <Text style={{ height: 25, alignItems: 'center' }}>{item.message}</Text>}
                                </View>
                            </View>

                            <View>

                                {item.id === 5 && <View>

                                    <View style={{ paddingHorizontal: 16, marginTop: 340 }}>

                                        <View style={{ backgroundColor: GlobalStyles.colors.greyFour, borderWidth: 1, height: 40, width: '100%', borderColor: GlobalStyles.colors.greyFour, flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}>

                                            <TextInput
                                                placeholder=' Type a message..'
                                                clearTextOnFocus={true}
                                            />
                                        </View>
                                    </View>
                                </View>}
                            </View>

                        </View>

                    )
                }}
                keyExtractor={item => item.id}

            />
        </View>

    );
};


export default FriendsMessages

const styles = StyleSheet.create({


})
