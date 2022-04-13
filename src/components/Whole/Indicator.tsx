import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface IindicatorProps {
  index: number;
  activeIndex: Animated.SharedValue<number>;
}

const Indicator: FC<IindicatorProps> = ({index, activeIndex}) => {
  const rIndicatorStyle = useAnimatedStyle(() => {
    const isActive = activeIndex.value === index;
    return {
      backgroundColor: withTiming(isActive ? 'gray' : 'white', {
        duration: 700,
        easing: Easing.ease,
      }),
    };
  });
  return <Animated.View style={[styles.indicator, rIndicatorStyle]} />;
};

const styles = StyleSheet.create({
  indicator: {
    height: 5,
    width: 30,
    marginHorizontal: 4,
    borderRadius: 5,
  },
});
export default Indicator;
