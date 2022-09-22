import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/views/WelcomeScreen';
import ForgotPassword from './src/views/ForgotPassword';

export default function App() {
  return (
    <View style={styles.container}>
      <ForgotPassword />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
