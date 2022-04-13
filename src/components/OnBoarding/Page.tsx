import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {PageInterface} from '../../constants';
import Animated, {
  event,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface IPageInterface {
  page: PageInterface;
  translateX: Animated.SharedValue<number>;
  index: number;
}

const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

export const Page: FC<IPageInterface> = ({page, translateX, index}) => {
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ];

  const rCircleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  });

  const rImageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{rotate: `${progress * Math.PI}rad`}],
      opacity: opacity,
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, rCircleStyle]} />
        <Animated.Image
          source={page.source}
          style={[styles.imageStyle, rImageStyle]}
          resizeMode={'stretch'}
        />
      </View>

      <Text style={styles.title}>{page.title}</Text>
      <Text style={styles.description}>{page.description}</Text>
    </View>
  );
};
const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;

const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  circle: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: CIRCLE_WIDTH / 2,
    height: '100%',
  },
  circleContainer: {
    width: CIRCLE_WIDTH,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  imageStyle: {
    height: PAGE_HEIGHT * 0.5,
    aspectRatio: 1,
    position: 'absolute',
    width: 100,
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 35,
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
  },
});

export default PAGE_WIDTH;
