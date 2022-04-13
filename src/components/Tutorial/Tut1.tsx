import {View, StyleSheet, useWindowDimensions, Button} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function Tut1() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const animate = () => {
    scale.value = withTiming(2, {
      duration: 500,
    });
  };

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
      <Button onPress={animate} title="Start" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
});
