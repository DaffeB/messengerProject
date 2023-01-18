import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import SearchBar from '../../components/SearchBar'
import Stories from '../../components/Stories'
import Messages from '../../components/Messages'





const ChatsScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }} >
            <SearchBar />
            <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 16 }}>
                <Stories />
            </View>
            <Messages />



        </View>
    )
}

export default ChatsScreen

const styles = StyleSheet.create({})





{/*= <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
<FlatList
    data={CHATMESSAGES}
    vertical={true}
    renderItem={({ item }) => {
        return (
            <View style={{ flexDirection: 'column' }}>

                {item.id === 1 && <View style={{ marginRight: 10 }}><Image style={styles.image} source={require('../assets/images/users/man.png')} /></View>}
                <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: GlobalStyles.colors.greySix, }}>
                    <View>{item.id === 1 && <View style={{ justifyContent: 'center' }}><Text style={{ paddingLeft: 10 }}>{item.message}</Text></View>}
                    </View>

                </View>


                <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: GlobalStyles.colors.greySix, }}>
                    {item.id === 1 && <View style={{ justifyContent: 'center' }}><Text>{item.messageTwo}</Text></View>}

                </View>

            </View>

        )
    }}
    keyExtractor={item => item.id}

/> */}