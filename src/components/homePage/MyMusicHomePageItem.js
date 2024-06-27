import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign'

export default function MyMusicHomePageItem() {
    return (
        <LinearGradient
        colors={['#181818', 'transparent']}
        start={{ x: 0.8, y: 1 }}
        end={{ x: -2, y: 1 }}
        style={styles.myMusicContainer}>
            <Image style={styles.spotifyLogo} source={require('../../../assets/pictures/logos/SpotifyLogo.png')} />
            <Text style={styles.titleText}>Mijn muziek</Text>
            <Text style={styles.subText}>Geïnteresseerd in mijn muzieksmaak?</Text>
            <ScrollView horizontal={true} style={styles.artistsWrapper}>
                <View style={styles.artistItem}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.artistImage} source={require("../../../assets/pictures/musicArtists/ImagineDragonsImage.png")} />
                    </View>
                    <Text style={styles.artistItemText}>Imagine Dragons</Text>
                </View>

                <View style={styles.artistItem}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.artistImage} source={require("../../../assets/pictures/musicArtists/NirvanaImage.png")} />
                    </View>
                    <Text style={styles.artistItemText}>Nirvana</Text>
                </View>

                <View style={styles.artistItem}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.artistImage} source={require("../../../assets/pictures/musicArtists/QueenImage.png")} />
                    </View>
                    <Text style={styles.artistItemText}>Queen</Text>
                </View>

                <View style={styles.artistItem}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.artistImage} source={require("../../../assets/pictures/musicArtists/EminemImage.png")} />
                    </View>
                    <Text style={styles.artistItemText}>Eminem</Text>
                </View>
            </ScrollView>
            <View style={styles.followMeWrapper}>
                <Text style={styles.followMeText}>Of volg me direct op spotify</Text>
                <AntDesign style={styles.followMeArrow} name='arrowright' size={20}/>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    myMusicContainer: {
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    titleText: {
        color: 'white',
        alignSelf: 'start',
        fontFamily: 'Prompt-Bold',
        fontSize: 18,
        marginBottom: 13,
    },
    subText: {
        fontFamily: 'MartelSans-SemiBold',
        color: 'white',
        marginBottom: 12,
    },
    spotifyLogo: {
        position: 'absolute',
        top: 11,
        right: 20,
        width: 45,
        height: 45,
    },
    artistsWrapper: {
        flexDirection: 'row',
    },
    artistItem: {
        backgroundColor: '#202020',
        borderRadius: 10,
        paddingHorizontal: 4,
        paddingVertical: 8,
        width: 100,
        gap: 9,
        alignItems: 'center',
        marginRight: 13,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    artistImage: {
        width: '80%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 75,
    },
    artistItemText: {
        fontFamily: 'MartelSans-SemiBold',
        fontSize: 10,
        color: 'white',
    },
    followMeWrapper: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        gap: 13,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    followMeText: {
        color: 'white',
        fontFamily: 'MartelSans-SemiBold'
    },
    followMeArrow: {
        color: 'white',
    },
});