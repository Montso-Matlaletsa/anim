import {StyleSheet} from 'react-native';
import React from 'react';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';

export default function Events() {
  const pressed = useSharedValue(false);
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });
  return (
    <>
      <PanGestureHandler onGestureEvent={() => {}}>
        <Animated.View style={styles.ball}></Animated.View>
      </PanGestureHandler>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
