import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import CHAT_MESSAGES_TWO from '../screens/FriendsMessages'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { GlobalStyles } from './styles';




const MessageInputField = ({ myProfileId, setMessages, messages }) => {
    const [inputValue, setInputValue] = useState('');

    const myUsername = "Aley";

    const onChangeNewMessage = (newMessage) => {
        setInputValue(newMessage);
    }

    const onPressSend = () => {
        setMessages([...messages, {
            id: myProfileId,
            username: myUsername,
            message: inputValue
        }]);
        setInputValue('');
    }

    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }}>

            <Image style={[styles.icons, { marginRight: 8 }]} source={require('../assets/icons/iconCamera.png')} />
            <Image style={[styles.icons, { marginRight: 6 }]} source={require('../assets/icons/iconImages.png')} />
            <Image style={styles.icons} source={require('../assets/icons/iconMicrophone.png')} />


            <View style={{ borderWidth: 1, height: 30, width: '65%', borderRadius: 20, borderColor: GlobalStyles.colors.greyFive }}>
                <TextInput
                    placeholder="Message"
                    style={{ paddingHorizontal: 10, paddingVertical: 10 }}
                    onChangeText={onChangeNewMessage}
                    value={inputValue}
                />
            </View>
            <View>

                <TouchableOpacity
                    // style={{ width: 100, height: 20, borderWidth: 1, backgroundColor: 'red' }}
                    title="Send"
                    onPress={onPressSend}
                ><Image style={{ marginLeft: 5, width: 25, height: 25, tintColor: GlobalStyles.colors.greenSeven }} source={require('../assets/icons/iconSend.png')} /></TouchableOpacity>
            </View>
        </View>
    )
}


export default MessageInputField

const styles = StyleSheet.create({

    icons: {

        paddingBottom: 0,
        width: 25,
        height: 25,
        tintColor: GlobalStyles.colors.greenSeven

    }
})