import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";
import { GlobalStyles } from "../const/styles";
import moment from 'moment'




const MessageBuilder = (props) => {
    return (
        <View>
            <Text>{props.userName}</Text>
            {props.itsMe ? (
                <MyMessageItem item={props.item} />
            ) : (
                <FriendMessageItem item={props.item} />
            )}
        </View>
    );
}


export default MessageBuilder;

const MyMessageItem = ({ item }) => {
    const [now, setNow] = useState(moment());
    // const today = moment().calendar()
    // const todayString = moment().startOf('day').calendar();

    const date = moment()
    const today = date.isSame(moment(), 'day') ? "today" : date.format("MMMM DD, YYYY");

    // const currentDate = useCurrentDate()

    // console.log("MyMessageItem")
    // console.log({ item });

    return (
        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', paddingHorizontal: 16 }}>
            <View style={style.meMessage}>
                <View style={{ flexDirection: 'column' }}>
                    <View>
                        <Text>{item.username}</Text>
                    </View>

                    <View>
                        <Text>{item.message}</Text>
                    </View>
                    <View>
                        {/* <Text>{now.format('MMMM Do YYYY, h:mm:ss a')}</Text> */}
                        {/* <Text>{today}</Text> */}
                        {/* <Text>{todayString}</Text> */}
                        <Text>{today}</Text>
                    </View>

                </View>
            </View>
        </View>

    );
};



// const letDate = () => {
//     const today = moment().calendar()
//     return (
//         <View>
//             <Text>{today}</Text>
//         </View>
//     )
// }


// letDate()
const FriendMessageItem = ({ item }) => {
    // const currentDate = useCurrentDate()
    return (
        <View style={{ paddingHorizontal: 16, flexDirection: 'row' }}>
            <Image style={{ width: 20, height: 20, marginTop: 22, marginRight: 10 }} source={require('../assets/images/users/man.png')} />
            <View style={style.friendMessage}>
                <View atyle={{ flexDirection: 'column' }}>
                    <Text>{item.username}</Text>
                </View>

                <View>
                    <Text >{item.message}</Text>
                </View>


            </View>
        </View>

    );
};

const style = StyleSheet.create({
    meMessage:
    {
        borderRadius: 15,
        borderColor: 'red',
        marginTop: 10,
        paddingHorizontal: 16,
        lineHeight: 20,
        backgroundColor: GlobalStyles.colors.greenEight,
        borderColor: GlobalStyles.colors.greenEight,
    },
    friendMessage:
    {
        minWidth: 20,
        maxWidth: '80%',
        paddingHorizontal: 16,
        borderWidth: 1,
        flexDirection: 'column',
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: GlobalStyles.colors.greySix,
        borderColor: GlobalStyles.colors.greySix


    }
})