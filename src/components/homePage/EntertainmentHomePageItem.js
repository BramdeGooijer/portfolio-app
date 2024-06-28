import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function EntertainmentHomePageItem() {
    return (
        <View style={styles.entertainmentContainer}>
            <Text style={styles.titleText}>Entertainment</Text>

            <ScrollView horizontal={true} style={styles.movieScroller}>
                <Image style={styles.movieImage} source={require("../../../assets/pictures/movies/SoloLevelingCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/movies/DrStoneCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/movies/AotCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/movies/MashleCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/movies/WalkingDeadCover.png")} />
                <Image style={styles.movieImage} source={require("../../../assets/pictures/movies/BreakingBadCover.png")} />
            </ScrollView>

            <TouchableOpacity style={styles.seeMoreWrapper} onPress={null}>
                <Text style={styles.seeMoreText}>Zie meer</Text>
                <AntDesign style={styles.seeMoreArrow} name='arrowright' size={20}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    entertainmentContainer: {
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
        // aspectRatio: 1,
        resizeMode: 'contain',
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