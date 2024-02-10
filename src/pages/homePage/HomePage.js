import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomePage() {
    return (
        
        <View style={styles.container}>
            <ScrollView style={styles.scrollArea}>
                
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
})