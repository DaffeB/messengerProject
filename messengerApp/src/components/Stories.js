import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable, onPress } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { GlobalStyles } from '../const/styles';
import AddStory from './AddStory';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
    {
        id: 1,
        name: 'Add story'
    },
    {
        id: 2,
        username: "Aley",
        img: require('../assets/images/users/man.png')
    },
    {
        id: 3,
        username: 'Trey',
        img: require('../assets/images/users/man1.png')
    },
    {
        id: 4,
        username: 'Emeline',
        img: require('../assets/images/users/woman.png')
    },
    {
        id: 5,
        username: 'Selma',
        img: require('../assets/images/users/woman1.png')
    },
    {
        id: 6,
        username: 'Jeana',
        img: require('../assets/images/users/woman2.png')
    },
    {
        id: 7,
        username: 'Tiffany',
        img: require('../assets/images/users/woman3.png')
    },


]







const Stories = () => {


    return (

        <View>
            <FlatList
                data={DATA}
                horizontal={true}
                renderItem={({ item }) => {
                    return (

                        <View style={{ alignItems: 'center', marginRight: 30 }}>
                            <View>
                                {item.id === 1 &&
                                    <TouchableOpacity>
                                        <View style={{
                                            width: 50, height: 50, borderRadius: 50, justifyContent: 'center',
                                            alignItems: 'center', backgroundColor: GlobalStyles.colors.greySix
                                        }}>
                                            <Image style={{ width: 30, height: 30, tintColor: GlobalStyles.colors.greenFive }} source={require('../assets/images/plus.png')} />
                                        </View>
                                    </TouchableOpacity>}

                            </View>
                            <Image key={item.id} source={item.img} style={{ width: 50, height: 50 }} />
                            <Text style={{ color: 'black', marginTop: 5 }}>{item.username}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}

            />
        </View>

    );
};


export default Stories

const styles = StyleSheet.create({})