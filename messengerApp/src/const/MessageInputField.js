import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import CHAT_MESSAGES_TWO from '../screens/FriendsMessages'
import { TouchableOpacity } from 'react-native-gesture-handler';

const myUsername = "Aley";

const MessageInputField = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState(CHAT_MESSAGES_TWO);

    const onChangeNewMessage = (newMessage) => {
        setInputValue(newMessage);
    }

    const onPressSend = () => {
        console.log(inputValue);
        setMessages([...messages, {
            id: myProfileId,
            username: myUsername,
            message: inputValue
        }]);
        setInputValue('');
    }
    return (
        <View style={{ borderWidth: 1, flexDirection: 'row' }}>
            <TextInput
                placeholder="Message"
                style={{ borderWidth: 1, width: '80%' }}
                onChangeText={onChangeNewMessage}
                value={inputValue}
            />
            <TouchableOpacity
                style={{ width: '5%', borderWidth: 1 }}
                title="Send"
                onPress={onPressSend}
            />
        </View>
    )
}

export default MessageInputField

const styles = StyleSheet.create({})