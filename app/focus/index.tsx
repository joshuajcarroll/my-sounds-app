import { View, StyleSheet } from 'react-native';
import Timer from '@/components/Timer';
import PlayPauseButton from '@/components/PlayPauseButton';
import SoundSelector from '@/components/SoundSelector';
import { useState } from 'react';

export default function HomeScreen() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(1500); // 25 minutes

  return (
    <View style={styles.container}>
      <Timer time={time} setTime={setTime} isRunning={isRunning} />
      <PlayPauseButton isRunning={isRunning} toggleRunning={() => setIsRunning(prev => !prev)} />
      <SoundSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#282c34' },
});
