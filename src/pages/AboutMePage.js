import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function AboutMePage({navigation}) {
    const age = Math.floor((new Date() - new Date("2004-01-26")) / (1000 * 60 * 60 * 24 * 365.25));

    const HandleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollArea}>
                <View style={styles.scrollContainer}>
                    <Text style={styles.titleText}>Over mij</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={HandleGoBack}>
                        <AntDesign name='close' size={24} color={'white'} />
                    </TouchableOpacity>
                    
                    <View style={styles.imageTextWrapper}>
                        <View style={styles.textNextToImageWrapper}>
                            <Text style={styles.aboutMeText}>
                                Hi, ik ben Bram de Gooijer ik ben {age} jaar en ik ben momenteel derde jaars student aan de hogeschool van Utrecht.
                            </Text>
                            <Text style={styles.aboutMeText}>
                                Ik studeer HBO-ICT software development en ik specialiseer me in Back-end development.
                            </Text>
                        </View>
                        <View style={styles.aboutMeImageWrapper}>
                            <Image style={styles.aboutMeImage} source={require('../../assets/pictures/ProfilePicture.jpeg')} />
                        </View>
                    </View>
                    <View style={styles.textNextToImageWrapper}>
                        <View>
                            <Text style={styles.aboutMeText}>
                                Ik programmeer al een veel langere tijd dan sinds ik in Utrecht studeer. Mijn passie voor programmeren is begonnen op de basisschool in groep 6. Dit is waar ik als kind de tijd en ruimte heb gekregen om mijzelf te ontwikkelen in de dingen die ik leuk vond.
                                Programmeren begon in <Text style={[styles.aboutMeText, {color: 'red'}]}>scratch</Text> of zelfs bij websites bouwen in de kladblok app van windows door de extensie van het bestand telkens aan te passen.
                            </Text>
                            <Text style={styles.aboutMeText}>
                                Je kunt wel zeggen dat ik echt vanaf 0 ben begonnen met deze expeditie.
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.aboutMeText}>
                                Eenmaal op de middelbare school groeide mijn liefde voor technische snufjes door en ben ik begonnen met <Text style={[styles.aboutMeText, {color: 'red'}]}>raspberry pi's</Text> gebruiken. Hiermee heb ik bijvoorbeeld mijn <Text style={[styles.aboutMeText, {color: 'blue'}]}>LED strip</Text> omgebouwd.
                            </Text>
                            <Text style={styles.aboutMeText}>
                                Ook ben ik hier begonnen met het serieus leren van een programmeer taal, dus niks is beter dan <Text style={[styles.aboutMeText, {color: 'red'}]}>Python</Text> voor een beginnende programmeur. Hierin heb ik mijn eerste <Text style={[styles.aboutMeText, {color: 'red'}]}>Racegame</Text> gemaakt.
                            </Text>
                        </View>
                        <Text style={styles.aboutMeText}>
                            Om mijn programmeer skills te verbeteren en er voor te zorgen dat ik klaar ben voor de praktijk was de keuze al snel gemaakt en ben ik HBO-ICT gaan studeren.
                            Hier heb ik een heleboel toffe <Text style={[styles.aboutMeText, {color: 'blue'}]}>projecten</Text> uitgevoerd en er is ook echt te zien dat er met de tijd mee verbetering in zit.
                        </Text>
                        <Text style={styles.aboutMeText}>
                            Alhoewel programmeren een groot deel van mijn leven is is dit niet mijn enige bezigheid. Van jongs af aan heb ik aangeleerd dat sporten erg gezond voor je is en zo heb ik dus ook altijd een sport moeten beoefenen. Zo ben ik begonnen met voetbal wat mijn primaire sport is gebleven maar ik heb ook andere dingen uitgeprobeerd zoals tennis, boulderen en nu tegenwoordig ga ik ook naar de sportschool. <Text style={[styles.aboutMeText, {color: 'orange'}]}>Lees hier verder meer over</Text>
                        </Text>
                        <View>
                            <Text style={styles.aboutMeText}>
                                Verder mag er ook nog wel entertainment zijn, daarom is mijn favoriete bezigheid het spelen van videogames. Ik ben fan van genres zoals story games, fps, rogue likes <Text style={[styles.aboutMeText, {color: 'yellow'}]}>en nog veel meer.</Text> Ik heb games gespeeld op veel verschillende platformen maar na het bouwen van mijn eigen PC is dat voor mij toch wel het beste.
                            </Text>
                            <Text style={styles.aboutMeText}>
                                Buiten games om ben ik ook fan van films. Ik heb heel erg veel series zoals Breaking Bad, The Walking Dead en andere actie films of series gekeken. Op een gegeven moment ben ik ook geïnterreseerd geraakt in het kijken van Anime. Ik heb shows gezien zoals Naruto, Death Note, Sword Art Online, Attack on Titan <Text style={[styles.aboutMeText, {color: 'yellow'}]}>en nog veel meer.</Text>
                            </Text>
                        </View>
                        <Text style={styles.aboutMeText}>
                            Voor zover mijn verhaal. Ik ben aardig van start in mijn carriëre maar er is nog een lange weg te gaan. Ik wens je nog het beste toe...
                        </Text>
                        <Text style={styles.aboutMeText}>
                            - Bram de Gooijer -
                        </Text>
                    </View>
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
    closeButton: {
        position: 'absolute',
        right: 0,
        marginTop: 5,
    },
    imageTextWrapper: {
        width: '100%',
        flexDirection: 'row',
    },
    aboutMeImageWrapper: {
        flex: 1,
        height: 230,
    },
    aboutMeImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    textNextToImageWrapper: {
        flex: 1.2,
        paddingRight: 10,
        gap: 20,
    },
    aboutMeText: {
        color: 'white',
        fontFamily: 'MartelSans-SemiBold',
        fontSize: 14,
    },
})