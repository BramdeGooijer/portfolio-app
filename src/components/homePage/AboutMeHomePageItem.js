import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutMeHomePageItem() {
    const age = Math.floor((new Date() - new Date("2004-01-26")) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <TouchableOpacity>
            <LinearGradient
            colors={['#1B48E9', 'transparent']}
            start={{ x: 0.8, y: 1 }}
            end={{ x: -2, y: 1 }}
            style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Over mij</Text>
                    <Text style={styles.subText}>Hi, ik ben Bram, ik ben {age} jaar en dit is mijn portfolio. Wil je meer over mij weten?</Text>
                    <Text style={styles.subText}>Klik hier...</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.profileImage} source={require('../../../assets/pictures/ProfilePicture.jpeg')}/>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        // for now
        height: 150,
        padding: 12,
        alignItems: 'center',
    },
    textContainer: {
        flex: 0.6,
    },
    titleText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Prompt-Bold',
    },
    subText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Prompt-Regular',
    },
    imageContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 90,
    }
})