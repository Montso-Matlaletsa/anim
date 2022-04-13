import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {WORDS} from '../../constants';
import ScrollPage from '../../components/ScrollPage';
import Indicator from '../../components/ScrollPage/Indicator';
import PAGE_WIDTH from '../../components/OnBoarding/Page';

const ScrollAnimation = () => {
  const translateX = useSharedValue(0);

  const activeindex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const scrollref = useAnimatedRef<Animated.ScrollView>();

  const navigateIndicator = useCallback(() => {
    if (activeindex.value === WORDS.length - 1) return;
    scrollref.current?.scrollTo({
      x: PAGE_WIDTH * activeindex.value,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.ScrollContainer}
        scrollEventThrottle={16}
        ref={scrollref}
        onScroll={scrollHandler}>
        {WORDS.map((word, index) => (
          <ScrollPage
            title={word}
            index={index}
            key={index.toString()}
            translateX={translateX}
          />
        ))}
      </Animated.ScrollView>

      <View style={styles.indicatorContainer}>
        {WORDS.map((_, index) => (
          <Indicator
            index={index}
            activeIndexIndicator={activeindex}
            key={index.toString()}
          />
        ))}
      </View>
    </View>
  );
};

export default ScrollAnimation;

const styles = StyleSheet.create({
  ScrollContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
  },
});
