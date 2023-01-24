import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { GlobalStyles } from "../../const/styles";


const PrivacyAndSupport = () => {
    return (
        <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
            <Text style={styles.title}>Privacy & Support</Text>
            <View style={{
                width: '100%',
                height: 150, flexDirection: 'column',
                backgroundColor: GlobalStyles.colors.greyThree, borderWidth: 1,
                borderColor: GlobalStyles.colors.greyThree, borderRadius: 10,

            }}>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/blockIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Restrict
                        </Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/blockIcon.png')} />
                    </View>
                    <View style={{ height: 50, borderBottomColor: GlobalStyles.colors.greyFive, borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Block
                        </Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.lines}>
                        <Image style={styles.icons} source={require('../../assets/iconsFriendsProfile/reportIcon.png')} />
                    </View>
                    <View style={{ height: 50, width: '80%' }}>
                        <Text style={{ marginTop: 15 }}>
                            Report
                        </Text>
                    </View>
                </View>


            </View>
        </View>
    );
}

export default PrivacyAndSupport;



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




