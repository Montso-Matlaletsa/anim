import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function Box() {
  const offset = useSharedValue(0);

  const left = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value * 255, {
            damping: 10,
            stiffness: 100,
          }),
        },
      ],
      opacity: offset.value * 1,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, left]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 50,
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  container: {},
});
