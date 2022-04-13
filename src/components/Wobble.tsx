import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {transform} from '@babel/core';

export default function Wobble() {
  const rotation = useSharedValue(0);
  const ANGLE = 10;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
      <Button
        onPress={() =>
          (rotation.value = withSequence(
            withTiming(-10, {duration: 50}),
            withRepeat(withTiming(ANGLE, {duration: 100}), 6, true),
            withTiming(0, {duration: 50, easing: Easing.ease}),
          ))
        }
        title="Start"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
