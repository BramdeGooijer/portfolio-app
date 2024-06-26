import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import AboutMeHomePageItem from "../components/homePage/AboutMeHomePageItem";
import ProjectHomePageItem from "../components/homePage/ProjectHomePageItem";
import MyMusicHomePageItem from "../components/homePage/MyMusicHomePageItem";
import EntertainmentHomePageItem from "../components/homePage/EntertainmentHomePageItem";
import SportsHomePageItem from "../components/homePage/SportsHomePageItem";
import GamesHomePageItem from "../components/homePage/GamesHomePageItem";
import HolidaysHomePageItem from "../components/homePage/HolidaysHomePageItem";
import SocialsHomePageItem from "../components/homePage/SocialsHomePageItem";

export default function HomePage({navigation}) {
    return (
        
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <ScrollView style={styles.scrollArea}>
                <View style={styles.scrollContainer}>
                    <Text style={styles.titleText}>Welkom</Text>
                    <AboutMeHomePageItem navigation={navigation}></AboutMeHomePageItem>

                    <View style={styles.softwareProjectsContainer}>
                        <Text style={styles.itemTitle}>Mijn software projecten</Text>
                        <View style={styles.projectItemWrapper}>
                            <ProjectHomePageItem navigation={navigation} project="Testsysteem"></ProjectHomePageItem>
                            <ProjectHomePageItem navigation={navigation} project="FoodieApp"></ProjectHomePageItem>
                            <ProjectHomePageItem navigation={navigation} project="Tegeletiketten"></ProjectHomePageItem>
                            <ProjectHomePageItem navigation={navigation} project="KpnDashboard"></ProjectHomePageItem>
                            <ProjectHomePageItem navigation={navigation} project="SteamApi"></ProjectHomePageItem>
                            <ProjectHomePageItem navigation={navigation}></ProjectHomePageItem>
                        </View>
                    </View>

                    <MyMusicHomePageItem></MyMusicHomePageItem>
                    <EntertainmentHomePageItem></EntertainmentHomePageItem>
                    <SportsHomePageItem></SportsHomePageItem>
                    <GamesHomePageItem></GamesHomePageItem>
                    <HolidaysHomePageItem></HolidaysHomePageItem>

                    <SocialsHomePageItem></SocialsHomePageItem>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'black',
    },
    scrollArea: {
        paddingTop: 50,
    },
    scrollContainer: {
        display: 'flex',
        gap: 22,
        alignItems: 'center',
        marginHorizontal: 22,
        paddingBottom: 100,
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Prompt-Bold',
    },
    itemTitle: {
        color: 'white',
        alignSelf: 'start',
        fontFamily: 'Prompt-Bold',
        fontSize: 18,
        marginBottom: 13,
    },
    softwareProjectsContainer: {
        width: '100%',
    },
    projectItemWrapper: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 21,
    },
})