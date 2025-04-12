import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/nature-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Noise-Free Focus</Text>
      <Text style={styles.subtitle}>Find your calm. Boost your productivity.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('./focus')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eef2f5' },
  logo: { width: 100, height: 100, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 16, color: '#666', marginVertical: 10, textAlign: 'center', paddingHorizontal: 20 },
  button: {
    marginTop: 40,
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: { color: 'white', fontSize: 18, fontWeight: '600' },
});
