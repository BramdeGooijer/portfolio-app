import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SoftwareProjectTab(props) {
    const HandleSeeMoreOnPress = () => {

    }

    return (
        <View style={styles.tabContainer}>
            <View style={styles.contentWrapper}>
                <View style={{flex: 1}}>
                    <Text style={styles.tabTitle}>{props.title}</Text>
                    <Text style={styles.tabSubtext}>
                        Als derde jaars software development student moeten 
                    </Text>
                </View>
                <View style={[styles.container, styles.testsysteemContainer]}>
                        <View style={[styles.itemImageContainer]}>
                            <Image style={[styles.testsysteemImage]} source={require('../../../assets/pictures/projectItems/TerbergLogoNoText.png')} />
                        </View>
                        <Text style={[styles.titleText, styles.testsysteemText]}>Testsysteem</Text>
                </View>
            </View>

            <Text style={styles.tabSubtext}>
                de studenten het vak Innovation volgen, waar de studenten in samenwerking met een bedrijf een opdracht moeten uitvoeren. Ik heb hier in opdracht van Terberg control systems samen met mijn team een proof of concept van een testsysteem moeten maken voor het testen van de door Terberg geproduceerde Connect Modules...
            </Text>

            <TouchableOpacity style={styles.seeMoreWrapper} onPress={HandleSeeMoreOnPress}>
                <Text style={styles.seeMoreText}>Zie meer</Text>
                <AntDesign style={styles.seeMoreArrow} name='arrowright' size={20}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        backgroundColor: '#181818',
        paddingHorizontal: 16,
        paddingVertical: 11,
        borderRadius: 10,
    },
    contentWrapper: {
        flexDirection: 'row',
        gap: 10,
    },
    tabTitle: {
        color: 'white',
        fontFamily: 'Prompt-Bold',
        fontSize: 18,
        marginBottom: 10,
    },
    tabSubtext: {
        color: 'white',
        fontFamily: 'MartelSans-SemiBold',
        lineHeight: 20,
    },
    
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