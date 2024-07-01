import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function AboutMePage({navigation}) {
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
})