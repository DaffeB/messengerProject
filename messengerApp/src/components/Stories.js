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
        img: require('../assets/images/users/man.png'),
        status: "active",
        isOnline: 'Yes'
    },
    {
        id: 3,
        username: 'Trey',
        img: require('../assets/images/users/man1.png'),
        status: "active",
        isOnline: 'No'
    },
    {
        id: 4,
        username: 'Emeline',
        img: require('../assets/images/users/woman.png'),
        status: "passive",
        isOnline: 'Yes'
    },
    {
        id: 5,
        username: 'Selma',
        img: require('../assets/images/users/woman1.png'),
        status: "passive",
        isOnline: 'Yes'
    },
    {
        id: 6,
        username: 'Jeana',
        img: require('../assets/images/users/woman2.png'),
        status: "active",
        isOnline: 'Yes'
    },
    {
        id: 7,
        username: 'Tiffany',
        img: require('../assets/images/users/woman3.png'),
        status: "active",
        isOnline: 'Yes'
    },


]







const Stories = ({ isActive }) => {


    return (

        <View>
            <FlatList
                data={DATA}
                horizontal={true}
                renderItem={({ item }) => {
                    // {
                    //     if (item.status === 'active') {
                    //         return <View style={{ backgroundColor: 'green', width: 10, height: 10 }}><Text>{item.status}</Text>
                    //             <Image source={item.img} style={{ width: 50, height: 50 }} />
                    //         </View>

                    //     } if (item.status === 'passive') {
                    //         return <View style={{ backgroundColor: 'red' }}><Text>{item.img}</Text>
                    //             <Image source={item.img} style={{ width: 50, height: 50 }} />
                    //         </View>
                    //     }
                    // }

                    return (

                        <View style={{ alignItems: 'center', marginRight: 30 }}>
                            <View>
                                {item.id === 1 &&
                                    <TouchableOpacity>
                                        <View style={{
                                            width: 50, height: 50, borderRadius: 50, justifyContent: 'center',
                                            alignItems: 'center', backgroundColor: GlobalStyles.colors.greyFour
                                        }}>
                                            <Image style={{ width: 30, height: 30, tintColor: GlobalStyles.colors.greenFive }} source={require('../assets/images/plus.png')} />
                                        </View>
                                    </TouchableOpacity>}

                            </View>
                            <View>

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {item.status === 'active' &&
                                        <View style={{ borderWidth: 2, width: 60, height: 60, borderColor: '#00b4d8', borderRadius: 50 }}>
                                            <Image style={{ width: 50, height: 50, marginLeft: 3, marginTop: 2 }} source={item.img} />
                                            <View>
                                                {item.isOnline === 'Yes' && <View style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: 10, marginLeft: 44 }}></View>}
                                            </View>
                                        </View>}
                                    {item.status === 'passive' && <View style={{ width: 60, height: 60, borderColor: 'white' }}><Image style={{ width: 50, height: 50 }} source={item.img} /></View>}

                                    {/* <Image key={item.id} source={item.img} style={{ width: 80, height: 80 }} /> */}

                                </View>


                            </View>

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