import {View, Text} from 'react-native';
import React, {FC, ReactNode} from 'react';
import Animated, {
  event,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

interface ScrollProps {
  children: ReactNode;
}

export const Scroll: FC<ScrollProps> = ({children}) => {
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}>
      {children}
    </Animated.ScrollView>
  );
};
