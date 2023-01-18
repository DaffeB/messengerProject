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
        status: "active",
        isOnline: 'No'
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
                    return (

                        <View style={{ alignItems: 'center', marginRight: 30 }}>
                            <View>
                                {item.id === 1 &&
                                    <TouchableOpacity>
                                        <View style={styles.addStory}>
                                            <Image style={{ width: 30, height: 30, tintColor: GlobalStyles.colors.greenFive }} source={require('../assets/images/plus.png')} />
                                        </View>
                                    </TouchableOpacity>}
                            </View>
                            <View>
                                <View>
                                    {item.status === 'active' &&
                                        <View style={styles.statusDesign}>
                                            <Image style={styles.peopleImages} source={item.img} />

                                        </View>}
                                    {item.status === 'passive' && <View style={{ width: 60, height: 60 }}><Image style={styles.peopleImages} source={item.img} /></View>}

                                    {/* <View style={{ borderWidth: 1, borderColor: 'blue' }}>
                                        {item.isOnline === 'Yes' && <View style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: 10, marginLeft: 44 }}></View>}
                                    </View> */}


                                    <View>
                                        {item.isOnline === "Yes" && <View style={styles.circle}></View>}

                                    </View>

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

const styles = StyleSheet.create({
    addStory: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.greyFour

    },
    statusDesign: {
        borderWidth: 2,
        width: 60,
        height: 60,
        borderColor: '#72ddf7',
        borderRadius: 50
    },
    peopleImages: {
        width: 50,
        height: 50,
        marginLeft: 3,
        marginTop: 2
    },
    circle: {
        borderWidth: 2,
        borderColor: 'white',
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#2ec4b6',
        position: 'absolute',
        top: '100%',
        left: '160%',
        marginTop: -20,
        marginLeft: -50,
    },
})