import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

const GoToProfileDetails = () => {

    const navigation = useNavigation();

    return (

        <View>
            <Pressable
                onPress={() => navigation.navigate('PorfileDetailsScreenOfFriends')}
                style={{ borderWidth: 1, width: 30, height: 30, backgroundColor: 'grey' }}>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/images/users/man1.png')} />
            </Pressable>

        </View>


    )
}

export default GoToProfileDetails

const styles = StyleSheet.create({})





