import { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'

export default function ProjectHomePageItem(props) {
    const [project, setProject] = useState();

    if (props.project === "testsysteem") {
            return (
                <View style={[styles.container, styles.testsysteemContainer]}>
                    <View style={[styles.itemImageContainer]}>
                        <Image style={[styles.testsysteemImage]} source={require('../../../assets/pictures/projectItems/TerbergLogoNoText.png')} />
                    </View>
                    <Text style={[styles.titleText, styles.testsysteemText]}>Testsysteem</Text>
                </View>
            )
    }
    else if (props.project === "foodie") {
        return (
            <View style={[styles.container, styles.foodieContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.foodieImage]} source={require('../../../assets/pictures/projectItems/FoodieImage.png')} />
                </View>
                <Text style={[styles.titleText, styles.foodieText]}>Foodie app</Text>
            </View>
        )
    }
    else if (props.project === "qoqon") {
        return (
            <View style={[styles.container, styles.qoqonContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.qoqonImage]} source={require('../../../assets/pictures/projectItems/QoqonLogo.png')} />
                </View>
                <Text style={[styles.titleText, styles.qoqonText]}>Tegeletiketten</Text>
            </View>
        )
    }
    else if (props.project === "kpn") {
        return (
            <View style={[styles.container, styles.kpnContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.kpnImage]} source={require('../../../assets/pictures/projectItems/KpnLogo.png')} />
                </View>
                <Text style={[styles.titleText, styles.kpnText]}>KPN dashboard</Text>
            </View>
        )
    }
    else if (props.project === "steam") {
        return (
            <View style={[styles.container, styles.steamContainer]}>
                <View style={[styles.itemImageContainer]}>
                    <Image style={[styles.steamImage]} source={require('../../../assets/pictures/projectItems/SteamLogo.png')} />
                </View>
                <Text style={[styles.titleText, styles.steamText]}>Steam API</Text>
            </View>
        )
    }
    else {
        return (
            <View style={[styles.container, styles.moreContainer]}>
                <Text style={[styles.titleText, styles.moreText]}>Bekijk meer van mijn projecten <AntDesign name="arrowright" size={15} /></Text>
            </View>
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
    moreText: {
        color: 'white',
    }
});