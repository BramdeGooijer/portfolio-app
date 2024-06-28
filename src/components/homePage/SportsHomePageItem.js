import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SportsHomePageItem() {
    return (
        <View style={styles.sportsContainer}>
            <Text style={styles.titleText}>Sporten is gezond</Text>
            
            <View style={styles.imageWrapper}>
                <Image style={styles.soccerTeamImage} source={require('../../../assets/pictures/sports/soccerTeam.jpeg')} />
                <Image style={styles.boulderingImage} source={require('../../../assets/pictures/sports/bouldering.jpeg')} />
                <Image style={styles.goalKeeperImage} source={require('../../../assets/pictures/sports/goalKeeper.jpeg')} />
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
        height: 325,
        position: 'relative',
    },
    soccerTeamImage: {
        position: 'absolute',
        top: 0,
        left: 10,
        width: 300,
        height: 150,
        borderRadius: 10,
        transform: [{ rotate: '-6deg' }],
        zIndex: 1,
    },
    boulderingImage: {
        position: 'absolute',
        top: 130,
        left: 35,
        height: 200,
        width: 142,
        borderRadius: 10,
        transform: [{ rotate: '-4deg' }],
        zIndex: 2,
    },
    goalKeeperImage: {
        position: 'absolute',
        top: 120,
        right: 15,
        width: 160,
        height: 130,
        borderRadius: 10,
        transform: [{ rotate: '4deg' }],
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