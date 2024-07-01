import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import SoftwareProjectTab from "../../components/softwareProjectsPage/SoftwareProjectTab";

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
                        <SoftwareProjectTab title='Testsysteem voor de Terberg Connect Module'></SoftwareProjectTab>
                        <SoftwareProjectTab title='Testsysteem voor de Terberg Connect Module'></SoftwareProjectTab>
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