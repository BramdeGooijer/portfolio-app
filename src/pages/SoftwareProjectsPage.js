import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import SoftwareProjectTab from "../components/softwareProjectsPage/SoftwareProjectTab";

export default function SoftwareProjectsPage({navigation}) {
    const age = Math.floor((new Date() - new Date("2004-01-26")) / (1000 * 60 * 60 * 24 * 365.25));

    const HandleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollArea}>
                <View style={styles.scrollContainer}>
                    <Text style={styles.titleText}>Mijn software projecten</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={HandleGoBack}>
                        <AntDesign name='close' size={24} color={'white'} />
                    </TouchableOpacity>
                    <View style={styles.projectTabWrapper}>
                        <SoftwareProjectTab 
                            project="testsysteem"
                            title='Testsysteem voor de Terberg Connect Module'
                            firstText="Als derde jaars software development student moeten "
                            secondText="de studenten het vak Innovation volgen, waar de studenten in samenwerking met een bedrijf een opdracht moeten uitvoeren. Ik heb hier in opdracht van Terberg control systems samen met mijn team een proof of concept van een testsysteem moeten maken voor het testen van de door Terberg geproduceerde Connect Modules..."
                            navigation={navigation}>
                        </SoftwareProjectTab>
                        <SoftwareProjectTab 
                            project="foodie"
                            title='Foodie App'
                            firstText="Aan het einde van het tweede studiejaar software development volgen de studenten de cursus TODSS"
                            secondText="(Thema Opdracht Digital Smart Services). Hier moeten de studenten in samenwerking met een bedrijf een opdracht uitvoeren. Voor dit project heb ik samen met mijn klasgenoten gewerkt aan een mobiele app voor al Lenna Omrani haar recepten en content..."
                            navigation={navigation}>
                        </SoftwareProjectTab>
                        <SoftwareProjectTab 
                            project="qoqon"
                            title='Qoqon Tegeletiketten'
                            firstText="Een van de opdrachten waar ik aan gewerkt heb bij De Stiho Groep is een generator van tegeletiketten voor Qoqon. "
                            secondText="Qoqon is een bedrijf dat zich focust rondom het verkopen van badkamer gerelateerde producten zoals tegels. Om een betere consumenten ervaring te creëren voor het uitkiezen van een goede tegel heb ik een systeem gemaakt dat QR-codes genereert op basis van informatie die medewerkers van Qoqon invullen..."
                            navigation={navigation}>
                        </SoftwareProjectTab>
                        <SoftwareProjectTab 
                            project="kpn"
                            title='KPN Dashboard'
                            firstText="Als tweede jaars software development student volgen de studenten de cursus Front-end. Voor deze cursus moesten de "
                            secondText="studenten voor KPN een dashboard designen en maken volgens de scrum methode.
Dit dashboard is bedoeld voor het invullen van reisafstand van de medewerkers van KPN en voor het stimuleren van een meer millieu bewuste keuze voor vervoer om de uitstoot van CO2 te kunnen minderen. Ook moet elk bedrijf in 2025 dit bijhouden voor de overheid..."
                            navigation={navigation}>
                        </SoftwareProjectTab>
                        <SoftwareProjectTab 
                            project="steam"
                            title='Steam API'
                            firstText="In het eerste jaar als HBO-ICT student moeten de studenten een project maken voor het gebruiken van een API. In dit "
                            secondText="geval moesten we gebruik maken van de Steam API, de bedoeling van de opdracht was dat we een Python Tkinter applicatie zouden maken in groepjes die voor meerdere use-cases gebruik maakten van de Steam API. Ook was het belangrijk dat er op gebied van elke richting van specialisatie iets geïmplementeerd was (Software development, Technisch Informatica, Artificial Intelligence, Cyber Security and Cloud en Bussiness IT en Management)..."
                            navigation={navigation}>
                        </SoftwareProjectTab>
                        <SoftwareProjectTab 
                            project="twitterzuil"
                            title='NS Twitterzuil'
                            firstText="Het eerste project dat ik op de opleiding HBO-ICT van de Hogeschool in Utrecht heb gedaan was het maken van een "
                            secondText="NS Twitterzuil. De NS Twitterzuil was een feedback systeem opgedeeld in 3 applicaties. 1 voor het opsturen van feedback, 1 voor het controleren van de feedback en 1 voor het tonen van de feedback op zowel twitter als een speciaal scherm.
Tijdens dit project hebben we geleerd over het gebruik van API's en Databases en dit moesten we schrijven in Python..."
                            navigation={navigation}>
                        </SoftwareProjectTab>
                        <SoftwareProjectTab 
                            project="wordle"
                            title='Test Driven Development Wordle'
                            firstText="Als tweede jaars software development student volgen de studenten de cursus "
                            secondText="Continuous Integration and Software Quality (CISQ). Hier werkt de student aan een project waar er Lingo/Wordle gemaakt moet worden volgens Test Driven Design. Het is de bedoeling dat de student een bepaalde set aan software instelt voor het project zodat er checks gedaan kunnen worden op basis van Security met SNYK, branch coverage, mutation coverage met PiTest, markup met Jacoco..."
                            navigation={navigation}>
                        </SoftwareProjectTab>
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
    projectTabWrapper: {
        width: '100%',
        gap: 27,
    },
})