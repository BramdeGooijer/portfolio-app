import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function GamesHomePageItem() {
    return (
        <View style={styles.gamesContainer}>
            <Text style={styles.titleText}>Games</Text>

            <ScrollView horizontal={true} style={styles.movieScroller}>
                <Image style={styles.movieImage} source={require("../../../assets/pictures/games/DarkAndDarkerCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/games/EldenRingCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/games/ApexLegendsCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/games/RocketLeagueCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/games/HollowKnightCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/games/DarkSoulsThreeCover.png")} />
            </ScrollView>

            <TouchableOpacity style={styles.seeMoreWrapper} onPress={null}>
                <Text style={styles.seeMoreText}>Zie meer</Text>
                <AntDesign style={styles.seeMoreArrow} name='arrowright' size={20}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    gamesContainer: {
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

    movieScroller: {
        
    },
    movieImage: {
        width: 100,
        height: 141,
        marginRight: 15,
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