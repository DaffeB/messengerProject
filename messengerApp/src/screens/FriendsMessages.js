import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, Pressable, Button } from 'react-native';
import { Image } from 'react-native';
import MessageInputField from '../const/MessageInputField';
import { GlobalStyles } from '../const/styles';
import MessageBuilder from './MessageBuliders';


const myProfileId = 1;
const myUsername = "Aley";

const CHAT_MESSAGES_TWO = [
    {
        id: 1,
        username: 'Aley',
        message: 'Hi Tiana ',
    },
    {
        id: 2,
        username: "Tiana",
        message: "Hi Alex"
    },
    {
        id: 1,
        username: "Aley",
        message: 'How are you?'
    },
    {
        id: 1,
        username: "Aley",
        message: 'Are you fine'
    },
    {
        id: 2,
        username: "Tiana",
        message: "Hmm, yess!"
    }

]




const FriendsMessages = () => {

    // const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState(CHAT_MESSAGES_TWO);

    // const onChangeNewMessage = (newMessage) => {
    //     setInputValue(newMessage);
    // }

    // const onPressSend = () => {
    //     console.log(inputValue);
    //     setMessages([...messages, {
    //         id: myProfileId,
    //         username: myUsername,
    //         message: inputValue
    //     }]);
    //     setInputValue('');
    // }

    // useEffect(() => {
    //     if (messages[messages.length - 1].id === 1) {
    //         setMessages([...messages, {
    //             id: 2,
    //             username: "Tiana",
    //             message: "ok!"
    //         }])
    //     }
    // }, [messages]);

    // console.log(messages);
    return (
        <View>
            <FlatList
                data={messages}
                horizontal={false}
                style={{ height: '90%' }}
                renderItem={({ item }) => {
                    return (
                        <MessageBuilder item={item} itsMe={myProfileId === item.id} />
                    );
                }}
                keyExtractor={item => item.id}
            />
            <View>

                <MessageInputField />
            </View>

        </View>

    );
};

export default FriendsMessages;

const styles = StyleSheet.create({});