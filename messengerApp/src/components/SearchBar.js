import { TextInput, StyleSheet, View, FlatList, Text } from 'react-native';
import { useState } from 'react';
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
    const [searchTerm, setSearchTerm] = useState('');


    const filteredData = DATA.filter(item => item.username.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <View>
            <TextInput
                placeholder="Search for a person..."
                onChangeText={text => setSearchTerm(text)}
                value={searchTerm}
            />

            <View><Stories /></View>

            <View style={{ borderWidth: 1 }}>
                <FlatList
                    data={filteredData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View>

                            <Text>{item.username}</Text>
                            <Text style={{ color: 'red' }}>{item.text}</Text>
                            <Text>{item.timeOfMessage}</Text>


                        </View>
                    )}
                />
            </View>

        </View>
    );
};

const SearchBar = () => {
    return <SearchFriends data={DATA} />;
};

export default SearchBar;
