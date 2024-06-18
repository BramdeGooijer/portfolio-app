import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import LinearGradient from "expo";

export default function AboutMeHomePageItem() {
    const age = Math.floor((new Date() - new Date("2004-01-26")) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Over mij</Text>
            <Text style={styles.subText}>Hi, ik ben Bram, ik ben {age} jaar en dit is mijn portfolio. Wil je meer over mij weten? Klik hier...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        borderRadius: 10,
        // for now
        height: 150,
    },
    titleText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Prompt-Bold',
    },
    subText: {

    }
})