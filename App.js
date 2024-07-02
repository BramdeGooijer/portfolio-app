import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { useFonts } from 'expo-font';
import { Prompt_700Bold, Prompt_600SemiBold } from '@expo-google-fonts/prompt';
import { MartelSans_700Bold, MartelSans_600SemiBold } from '@expo-google-fonts/martel-sans';
import Navigation from './src/navigation/Navigation';

enableScreens();

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
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
