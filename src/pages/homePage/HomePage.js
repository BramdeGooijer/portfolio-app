import { ScrollView, StyleSheet, Text, View } from "react-native";
import AboutMeHomePageItem from "../../components/homePage/AboutMeHomePageItem";

export default function HomePage() {
    return (
        
        <View style={styles.container}>
            <ScrollView style={styles.scrollArea}>
                <View style={styles.scrollContainer}>
                    <Text style={styles.titleText}>Welkom</Text>
                    <AboutMeHomePageItem></AboutMeHomePageItem>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    scrollArea: {
        paddingTop: 50,
    },
    scrollContainer: {
        display: 'flex',
        gap: 22,
        alignItems: 'center',
        marginHorizontal: 22,
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Prompt_700Bold',
    },
})