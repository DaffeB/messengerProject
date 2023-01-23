import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileDetailsScreenOfFriends = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Pressable onPress={() => navigation.goBack()}>
                <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/goBackLeft.png')} />
            </Pressable>
        </SafeAreaView>

    )
}


export default ProfileDetailsScreenOfFriends

const styles = StyleSheet.create({})