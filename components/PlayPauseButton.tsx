import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  isRunning: boolean;
  toggleRunning: () => void;
};

const PlayPauseButton: React.FC<Props> = ({ isRunning, toggleRunning }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={toggleRunning}>
      <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: '#61dafb', padding: 10, borderRadius: 5, marginBottom: 20 },
  buttonText: { fontSize: 20, color: 'black' },
});

export default PlayPauseButton;
