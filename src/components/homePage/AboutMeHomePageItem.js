import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import LinearGradient from "expo";

export default function AboutMeHomePageItem() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Over mij</Text>
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
    }
})