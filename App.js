import { StyleSheet, View, StatusBar } from 'react-native';
import HomePage from './src/pages/homePage/HomePage';
import { useFonts } from 'expo-font';
import { Prompt_700Bold, Prompt_600SemiBold } from '@expo-google-fonts/prompt';
import { MartelSans_700Bold, MartelSans_600SemiBold } from '@expo-google-fonts/martel-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    Prompt_700Bold,
    Prompt_600SemiBold,
    MartelSans_700Bold,
    MartelSans_600SemiBold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
