import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HolidaysHomePageItem() {
    return (
        <View style={styles.sportsContainer}>
            <Text style={styles.titleText}>Vakanties zowel warm als koud</Text>
            
            <View style={styles.imageWrapper}>
                <Image style={styles.louvreImage} source={require('../../../assets/pictures/holidays/Louvre.png')} />
                <Image style={styles.londonEyeImage} source={require('../../../assets/pictures/holidays/LondonEye.png')} />
                <Image style={styles.towerBridgeImage} source={require('../../../assets/pictures/holidays/TowerBridge.png')} />
                <Image style={styles.skiingImage} source={require('../../../assets/pictures/holidays/Skiing.jpeg')} />
            </View>
            <TouchableOpacity style={styles.seeMoreWrapper} onPress={null}>
                <Text style={styles.seeMoreText}>Zie meer</Text>
                <AntDesign style={styles.seeMoreArrow} name='arrowright' size={20}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    sportsContainer: {
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#181818",
    },
    titleText: {
        color: 'white',
        alignSelf: 'start',
        fontFamily: 'Prompt-Bold',
        fontSize: 18,
        marginBottom: 13,
    },

    imageWrapper: {
        width: '100%',
        height: 250,
        position: 'relative',
    },
    louvreImage: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 114,
        height: 152,
        borderRadius: 10,
        transform: [{ rotate: '-12deg' }],
        zIndex: 1,
    },
    londonEyeImage: {
        position: 'absolute',
        top: 0,
        left: 120,
        height: 153,
        width: 114,
        borderRadius: 10,
        transform: [{ rotate: '-3deg' }],
        zIndex: 2,
    },
    towerBridgeImage: {
        position: 'absolute',
        top: 10,
        right: 0,
        width: 114,
        height: 153,
        borderRadius: 10,
        transform: [{ rotate: '4deg' }],
        zIndex: 4,
    },
    skiingImage: {
        position: 'absolute',
        top: 140,
        left: 90,
        width: 165,
        height: 123,
        borderRadius: 10,
        transform: [{ rotate: '-6deg' }],
        zIndex: 3,
    },

    seeMoreWrapper: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        gap: 13,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seeMoreText: {
        color: 'white',
        fontFamily: 'MartelSans-SemiBold'
    },
    seeMoreArrow: {
        color: 'white',
    },
});