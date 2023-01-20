import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";
import { GlobalStyles } from "../const/styles";


const MessageBuilder = ({ item, itsMe }) => {
    return itsMe ? (
        <MyMessageItem item={item} />
    ) : (
        <FriendMessageItem item={item} />
    );
};

export default MessageBuilder;

const MyMessageItem = ({ item }) => {
    console.log("MyMessageItem")
    console.log({ item });

    return (
        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', paddingHorizontal: 16 }}>
            <View style={style.meMessage}>
                <View style={{ flexDirection: 'column' }}>
                    <View>
                        <Text>{item.username}</Text>
                    </View>

                    <View>
                        <Text>{item.message}</Text>
                    </View>
                </View>
            </View>
        </View>

    );
};

const FriendMessageItem = ({ item }) => {

    return (
        <View style={{ paddingHorizontal: 16, flexDirection: 'row' }}>
            <Image style={{ width: 20, height: 20, marginTop: 22, marginRight: 10 }} source={require('../assets/images/users/man.png')} />
            <View style={style.friendMessage}>
                <View atyle={{ flexDirection: 'column' }}>
                    <Text>{item.username}</Text>
                </View>

                <View>
                    <Text >{item.message}</Text>
                </View>

            </View>
        </View>

    );
};

const style = StyleSheet.create({
    meMessage:
    {
        borderRadius: 15,
        borderColor: 'red',
        marginTop: 10,
        paddingHorizontal: 16,
        lineHeight: 20,
        backgroundColor: GlobalStyles.colors.greenEight,
        borderColor: GlobalStyles.colors.greenEight,
    },
    friendMessage:
    {
        minWidth: 20,
        maxWidth: '80%',
        paddingHorizontal: 16,
        borderWidth: 1,
        flexDirection: 'column',
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: GlobalStyles.colors.greySix,
        borderColor: GlobalStyles.colors.greySix


    }
})