import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  event,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {Habits} from '../../constants';
import Habit from '../../components/Whole';
import Indicator from '../../components/Whole/Indicator';
import PAGE_WIDTH from '../../components/OnBoarding/Page';

const Whole = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const activeindex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollContainer]}>
        {Habits.map((habit, index) => (
          <Habit
            key={index.toString()}
            habit={habit}
            translateX={translateX}
            index={index}
          />
        ))}
      </Animated.ScrollView>
      <View style={[styles.indicator]}>
        {Habits.map((_, index) => (
          <Indicator
            key={index.toString()}
            activeIndex={activeindex}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};

export default Whole;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CED2D9',
  },
  scrollContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
  indicator: {
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
