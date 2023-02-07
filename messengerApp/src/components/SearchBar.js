import { TextInput, StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { GlobalStyles } from '../const/styles';
import DATA from '../const/Data';
import Stories from './Stories';


// const SearchBar = () => {


//     return (
//         <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
//             <View style={{ backgroundColor: GlobalStyles.colors.greyFour, borderWidth: 1, height: 40, width: '100%', borderColor: GlobalStyles.colors.greyFour, flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}>
//                 <Image style={{ width: 20, height: 20, marginLeft: 10, marginRight: 5 }} source={require('../assets/images/search.png')} />
//                 <TextInput
//                     placeholder='Serach'
//                     clearTextOnFocus={true}
//                 />
//             </View>
//         </View>
//         // importer in Chat Screen 

//     );
// }


// export default SearchBar;


const SearchFriends = () => {
    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');


    const filteredData = DATA.filter(item => item.username.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <View>
            <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
                <View style={{ backgroundColor: GlobalStyles.colors.greyFour, borderWidth: 1, height: 40, width: '100%', borderColor: GlobalStyles.colors.greyFour, flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}>
                    <Image style={{ width: 20, height: 20, marginLeft: 10, marginRight: 5 }} source={require('../assets/images/search.png')} />
                    <TextInput
                        placeholder="Search"
                        onChangeText={text => setSearchTerm(text)}
                        value={searchTerm}
                    />


                </View>
            </View>



            <View><Stories /></View>

            <View style={{ height: 500 }}>
                <FlatList
                    data={filteredData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ alignItems: 'center', marginRight: 30, flexDirection: 'row', paddingHorizontal: 16, marginBottom: 15 }}>

                                <View>
                                    <Image key={item.id} source={item.img} style={{ width: 50, height: 50, marginRight: 10 }} />
                                </View>
                                <View>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('FriendsMessages', { userName: item.username })}>




                                        <Text style={{ color: 'black', marginTop: 5, fontWeight: '500', fontSize: 16 }}>{item.username}</Text>
                                        <View style={{ flexDirection: 'row', fontSize: 14, lineHeight: 25 }}>
                                            <Text style={{ fontWeight: '300', marginRight: 10 }}>{item.text}</Text>
                                            <Text style={{ fontWeight: '300', color: GlobalStyles.colors.greyFive }}>{item.timeOfMessage}</Text>
                                        </View>

                                    </TouchableOpacity>

                                </View>

                            </View>


                        )
                    }}
                />
            </View>

        </View>
    );
};

const SearchBar = () => {
    return <SearchFriends data={DATA} />;
};

export default SearchBar;
