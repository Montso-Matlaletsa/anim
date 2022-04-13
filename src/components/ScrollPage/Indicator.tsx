import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {BACKGROUND_COLOR} from '../../constants';

interface IIndicatorProps {
  index: number;
  activeIndexIndicator: Animated.SharedValue<number>;
}

const Indicator: FC<IIndicatorProps> = ({index, activeIndexIndicator}) => {
  const rInidicatorStyle = useAnimatedStyle(() => {
    const isActive = activeIndexIndicator.value === index;
    const opacity = isActive ? 1 : 0.5;
    return {
      backgroundColor: withTiming(isActive ? 'blue' : 'grey', {
        duration: 1000,
        easing: Easing.ease,
      }),
      opacity,
    };
  });
  return <Animated.View style={[styles.rect, rInidicatorStyle]} />;
};

const styles = StyleSheet.create({
  rect: {
    height: 7,
    width: 30,
    marginBottom: 20,
    marginHorizontal: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default Indicator;
