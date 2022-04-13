import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {IHabitContent} from '../../constants';
import {Ionicons} from '@expo/vector-icons';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

interface IHabitProps {
  habit: IHabitContent;
  translateX: Animated.SharedValue<number>;
  index: number;
}
const Habit: FC<IHabitProps> = ({habit, translateX, index}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  return (
    <Animated.View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => {}}>
          <Text style={styles.icon}>X</Text>
        </Pressable>

        <Animated.View>
          <Text style={styles.title}>{habit.title}</Text>
        </Animated.View>

        {habit.order === 'image-first' && (
          <>
            <Text style={styles.description}>{habit.description}</Text>
            <Animated.Image
              source={habit.source}
              resizeMode={'contain'}
              style={[styles.image]}
            />
            <Text style={styles.description}>{habit.moreText}</Text>
          </>
        )}

        {habit.order === 'description-first' && (
          <>
            <Image
              source={habit.source}
              resizeMode={'contain'}
              style={[styles.image]}
            />
            <Text style={styles.description}>{habit.description}</Text>
            <Text style={styles.description}>{habit.moreText}</Text>
          </>
        )}
      </ScrollView>
    </Animated.View>
  );
};

export default Habit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height,
    width,
    backgroundColor: '#CED2D9',
  },
  icon: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'normal',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: width * 0.8,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'stretch',
    marginTop: 40,
  },
  description: {
    margin: 20,
    fontSize: 15,
  },
});
