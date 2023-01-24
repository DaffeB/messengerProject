import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { GlobalStyles } from "../../const/styles";


const Cusomisation = () => {
    return (
        <View style={{ paddingHorizontal: 16 }}>
            <Text style={styles.title}>Cusomisation</Text>
            <View style={{
                width: '100%',
                height: 200, flexDirection: 'column',
                backgroundColor: GlobalStyles.colors.greyThree, borderWidth: 1,
                borderColor: GlobalStyles.colors.greyThree, borderRadius: 10,

            }}>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/themeIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Theme
                        </Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/lips.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Quick reaction
                        </Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/nicknamesIcon.png')} />
                    </View>
                    <View style={styles.borderColor}>
                        <Text style={{ marginTop: 15 }}>
                            Nicknames
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/wordsEffectIcon.png')} />
                    </View>
                    <View style={{ height: 50, width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Words effect
                        </Text>
                    </View>
                </View>


            </View>
        </View>
    );
}

export default Cusomisation;



const styles = StyleSheet.create({
    title: {
        paddingBottom: 10,
        color: GlobalStyles.colors.greyFive,
        marginLeft: 15

    },

    icons: {
        width: 25,
        height: 25,
        marginRight: 20
    },

    lines: {
        height: 50, width: '20%', alignItems: 'center', justifyContent: 'center'
    },
    borderColor: {
        height: 50,
        borderBottomColor: GlobalStyles.colors.greyFive,
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        width: '80%'
    }
})




