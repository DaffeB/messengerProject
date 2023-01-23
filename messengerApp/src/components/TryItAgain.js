import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { GlobalStyles } from "../const/styles";


const TryItAgain = () => (
    <View style={{ paddingHorizontal: 16 }}>
        <View style={{ width: '100%', height: 200, flexDirection: 'column', backgroundColor: 'grey', paddingHorizontal: 16 }}>
            <View style={{ flex: 1, height: '25%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red', }}>

                <View style={{ borderBottomColor: 'black', width: '91%' }}>
                    <Text>Theme</Text>
                </View>

            </View>
            <View style={{ flex: 1, height: '25%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/lips.png')} />
                <View style={{ borderBottomColor: 'black', width: '91%' }}>

                    <Text>Quic reaction</Text>
                </View>
            </View>
            <View style={{ flex: 1, height: '25%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/nicknamesIcon.png')} />
                <View style={{ borderBottomColor: 'black', width: '91%' }}>

                    <Text>Nicknames</Text>
                </View>
            </View>
            <View style={{ flex: 1, height: '25%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
                <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/wordsEffectIcon.png')} />
                <View style={{ borderBottomColor: 'black', width: '91%' }}>

                    <Text>Word effect</Text>
                </View>
            </View>
        </View>
    </View >
);

export default TryItAgain;
// const TryIt = () => (
//     <View style={{ paddingHorizontal: 16 }}>
//         <View style={{ width: '100%', height: 200, flexDirection: 'column', }}>
//             <View style={{ flex: 1, borderWidth: 1, borderColor: '#f00', height: '25%', }}>
//                 <View style={{ flexDirection: 'row', marginVertical}}>
//                     <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/themeIcon.png')} />
//                     <Text>Row 1</Text>
//                 </View>

//             </View>
//             <View style={{ flex: 1, borderWidth: 1, borderColor: 'blue', height: '25%', flexDirection: 'row' }}>
//                 <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/themeIcon.png')} />
//                 <Text>Row 2</Text>
//             </View>
//             <View style={{ flex: 1, borderWidth: 1, borderColor: 'green', height: '25%', flexDirection: 'row' }}>
//                 <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/themeIcon.png')} />
//                 <Text>Row 3</Text>
//             </View>
//             <View style={{ flex: 1, borderWidth: 1, borderColor: 'grey', height: '25%', flexDirection: 'row' }}>
//                 <Image style={styles.icons} source={require('../assets/iconsFriendsProfile/themeIcon.png')} />
//                 <Text>Row 4</Text>
//             </View>
//         </View>
//     </View>

// );

// export default TryIt;


const styles = StyleSheet.create({
    title: {
        paddingBottom: 10,
        color: GlobalStyles.colors.greyFive

    },

    icons: {
        width: 25,
        height: 25,
        marginRight: 20
    },
})