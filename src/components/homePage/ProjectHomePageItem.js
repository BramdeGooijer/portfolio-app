import { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'

export default function ProjectHomePageItem({navigation, project}) {
    const HandleOpenSoftwareProjects = (page) => {
        navigation.navigate(page);
    }

    if (project === "Testsysteem") {
            return (
                <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("Testsysteem")} style={[styles.container, styles.testsysteemContainer]}>
                    <View style={[styles.itemImageContainer]}>
                        <Image style={[styles.testsysteemImage]} source={require('../../../assets/pictures/projectItems/TerbergLogoNoText.png')} />
                    </View>
                    <Text style={[styles.titleText, styles.testsysteemText]}>Testsysteem</Text>
                </TouchableOpacity>
            )
    }
    else if (project === "FoodieApp") {
        return (
            <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("FoodieApp")} style={[styles.container, styles.foodieContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.foodieImage]} source={require('../../../assets/pictures/projectItems/FoodieImage.png')} />
                </View>
                <Text style={[styles.titleText, styles.foodieText]}>Foodie app</Text>
            </TouchableOpacity>
        )
    }
    else if (project === "Tegeletiketten") {
        return (
            <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("Tegeletiketten")} style={[styles.container, styles.qoqonContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.qoqonImage]} source={require('../../../assets/pictures/projectItems/QoqonLogo.png')} />
                </View>
                <Text style={[styles.titleText, styles.qoqonText]}>Tegeletiketten</Text>
            </TouchableOpacity>
        )
    }
    else if (project === "KpnDashboard") {
        return (
            <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("KpnDashboard")} style={[styles.container, styles.kpnContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.kpnImage]} source={require('../../../assets/pictures/projectItems/KpnLogo.png')} />
                </View>
                <Text style={[styles.titleText, styles.kpnText]}>KPN dashboard</Text>
            </TouchableOpacity>
        )
    }
    else if (project === "SteamApi") {
        return (
            <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("SteamApi")} style={[styles.container, styles.steamContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.steamImage]} source={require('../../../assets/pictures/projectItems/SteamLogo.png')} />
                </View>
                <Text style={[styles.titleText, styles.steamText]}>Steam API</Text>
            </TouchableOpacity>
        )
    }
    else if (project === "Twitterzuil") {
        return (
            <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("Twitterzuil")} style={[styles.container, styles.twitterContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.twitterImage]} source={require('../../../assets/pictures/projectItems/Twitterzuil.png')} />
                </View>
                <Text style={[styles.titleText, styles.twitterText]}>Twitterzuil</Text>
            </TouchableOpacity>
        )
    }
    else if (project === "Wordle") {
        return (
            <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("Wordle")} style={[styles.container, styles.wordleContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.wordleImage]} source={require('../../../assets/pictures/projectItems/Wordle.png')} />
                </View>
                <Text style={[styles.titleText, styles.wordleText]}>TDD Wordle</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={() => HandleOpenSoftwareProjects("SoftwareProjects")} style={[styles.container, styles.moreContainer]}>
                <Text style={[styles.titleText, styles.moreText]}>Bekijk meer van mijn projecten <AntDesign name="arrowright" size={15} /></Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    titleText: {
        fontFamily: 'Prompt-SemiBold',
        fontSize: 14,
    },
    itemImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    testsysteemImage: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
    },
    foodieImage: {
        width: '100%',
        height: '120%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    qoqonImage: {
        height: '140%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    kpnImage: {
        height: '130%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    steamImage: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    twitterImage: {
        height: '110%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    wordleImage: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    testsysteemContainer: {
        backgroundColor: '#F3F3F3',
    },
    foodieContainer: {
        backgroundColor: "#294406",
    },
    qoqonContainer: {
        backgroundColor: "#1F2B3A",
    },
    kpnContainer: {
        backgroundColor: "#00C300",
    },
    steamContainer: {
        backgroundColor: "#132D61",
    },
    twitterContainer: {
        backgroundColor: "#FFC917",
    },
    wordleContainer: {
        backgroundColor: "#787C7E",
    },
    moreContainer: {
        backgroundColor: '#191E2C',
    },
    testsysteemText: {
        color: 'black',
    },
    foodieText: {
        color: 'white',
    },
    qoqonText: {
        color: 'white',
        fontSize: 12,
    },
    kpnText: {
        color: 'white',
        lineHeight: 15,
    },
    steamText: {
        color: 'white',
    },
    twitterText: {
        color: 'white',
    },
    wordleText: {
        color: 'white',
    },
    moreText: {
        color: 'white',
    }
});