import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from "react-native";

export default function SocialsHomePageItem() {
const instagramProfileUrl = "https://www.instagram.com/bram_de_gooijer/";
const twitterProfileUrl = "https://x.com/BramGooijer";
const snapchatProfileUrl = "https://snapchat.com/t/mrFCPMR2";

const HandleOpenUrl = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
        await Linking.openURL(url);
    } 
    else {
        Alert.alert('Kan verwijzing niet openen!');
    }
}

    return (
        <View style={styles.socialsContainer}>
            <Text style={styles.titleText}>Social Media</Text>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => HandleOpenUrl(instagramProfileUrl)}>
                    <View style={styles.socialWrapper}>
                        <Image style={styles.socialImage} source={require('../../../assets/pictures/socials/InstagramLogo.png')}/>
                        <Text style={styles.socialText}>@bram_de_gooijer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => HandleOpenUrl(twitterProfileUrl)}>
                    <View style={styles.socialWrapper}>
                        <Image style={styles.socialImage} source={require('../../../assets/pictures/socials/TwitterLogo.png')}/>
                        <Text style={styles.socialText}>@BramGooijer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => HandleOpenUrl(snapchatProfileUrl)}>
                    <View style={styles.socialWrapper}>
                        <Image style={styles.socialImage} source={require('../../../assets/pictures/socials/SnapchatLogo.png')}/>
                        <Text style={styles.socialText}>@bramdegooijer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    socialsContainer: {
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
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    socialWrapper: {
        alignItems: 'center',
    },
    socialImage: {
        width: 50,
        height: 50,
    },
    socialText: {
        color: 'white',
        fontFamily: 'Prompt-Bold',
        fontSize: 8,
        marginTop: 5,
    },
});