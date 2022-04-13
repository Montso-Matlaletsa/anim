import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface IScrollPageProps {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}
const {width, height} = Dimensions.get('window');
const SQUARE_SIZE = width * 0.7;
const ScrollPage: FC<IScrollPageProps> = ({title, index, translateX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rSquare = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SQUARE_SIZE / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(translateX.value, inputRange, [-2, 1, -2]);
    return {
      transform: [{translateY}],
      opacity,
    };
  });
  return (
    <View
      style={[
        styles.pageContainer,
        {backgroundColor: `rgba(0, 0, 256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rSquare]} />

      <Animated.View style={[rTextStyle, {position: 'absolute'}]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default ScrollPage;

const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.4)',
  },
  text: {
    fontSize: 40,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
