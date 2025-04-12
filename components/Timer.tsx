import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

type TimerProps = {
  time: number;
  setTime: (time: number) => void;
  isRunning: boolean;
};

const Timer: React.FC<TimerProps> = ({ time, setTime, isRunning }) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
    interval = setInterval(() => setTime(time - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, '0');

  return <Text style={styles.timer}>{minutes}:{seconds}</Text>;
};

const styles = StyleSheet.create({
  timer: { fontSize: 48, color: 'white', marginBottom: 20 },
});

export default Timer;
