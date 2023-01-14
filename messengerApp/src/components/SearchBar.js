import { TextInput, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
import { GlobalStyles } from '../const/styles';

const SearchBar = () => {


    return (
        <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
            <View style={{ backgroundColor: GlobalStyles.colors.greyFour, borderWidth: 1, height: 40, width: '100%', borderColor: GlobalStyles.colors.greyFour, flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}>
                <Image style={{ width: 20, height: 20, marginLeft: 10, marginRight: 5 }} source={require('../assets/images/search.png')} />
                <TextInput
                    placeholder='Serach'
                    clearTextOnFocus={true}
                />
            </View>
        </View>
        // importer in Chat Screen 

    );
}


export default SearchBar;