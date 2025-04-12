import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const sounds = [
  { id: '1', name: 'White Noise', uri: 'https://www.example.com/white-noise.mp3' },
  { id: '2', name: 'Rain', uri: 'https://www.example.com/rain.mp3' },
  { id: '3', name: 'Waves', uri: 'https://www.example.com/waves.mp3' }
];

const SoundSelector: React.FC = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound(uri: string) {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({ uri });
    setSound(newSound);
    await newSound.playAsync();
  }

  return (
    <FlatList
      data={sounds}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.soundButton} onPress={() => playSound(item.uri)}>
          <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  soundButton: { backgroundColor: '#61dafb', padding: 10, marginTop: 10, borderRadius: 5 },
  buttonText: { fontSize: 16, color: 'black' },
});

export default SoundSelector;
