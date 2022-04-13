

 import React, { useCallback } from 'react';
 import {StyleSheet, Text, View} from 'react-native';
 import Animated, {
   useAnimatedRef,
   useAnimatedScrollHandler,
   useDerivedValue,
   useSharedValue,
 } from 'react-native-reanimated';
 


import PAGE_WIDTH, { Page } from '../../components/OnBoarding/Page';
import { BACKGROUND_COLOR, PAGES } from '../../constants';
import Dot from '../../components/OnBoarding/Dot';
 
 const OnBoarding = () => {
   const translateX = useSharedValue(0);
 
   const scrollHandler = useAnimatedScrollHandler({
     onScroll: event => {
       translateX.value = event.contentOffset.x;
     },
   });
 
   const activeIndex = useDerivedValue(()=>{
     return Math.round(translateX.value / PAGE_WIDTH)
   })
 
   const scrollRef = useAnimatedRef<Animated.ScrollView>()
   const onIconPress = useCallback(()=>{
     if(activeIndex.value === PAGES.length - 1) return
     scrollRef.current?.scrollTo({
       x: PAGE_WIDTH * (activeIndex.value + 1)
     })
   },[])
 
   return (
     <View style={styles.container}>
       <Animated.ScrollView
         style={{flex: 1}}
         horizontal
         pagingEnabled
         showsHorizontalScrollIndicator={false}
         scrollEventThrottle={16}
         onScroll={scrollHandler}
         ref={scrollRef}
         >
         {PAGES.map((page, index) => (
           <Page
             page={page}
             key={index.toString()}
             translateX={translateX}
             index={index}
           />
         ))}
       </Animated.ScrollView>
       <View style={styles.footer}>
         {/*Paginator*/}
         <View style={[styles.fillCenter, {flexDirection: 'row'}]}>
           {
             PAGES.map((_, index)=>{
               return <Dot key={index.toString()} activeDotIndex={activeIndex} index={index} />
             })
           }
         </View>
         {/*Text container*/}
         <View style={styles.fillCenter}>
           <Text style={styles.text}>View Board</Text>
         </View>
         {/*Icon container*/}
         <View style={styles.fillCenter}>
           <Text style={{fontSize: 24}} onPress={onIconPress} >-></Text>
        
         </View>
       </View>
     </View>
   );
 };
 
 export default OnBoarding;
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: BACKGROUND_COLOR,
   },
   footer: {
     height: 50,
    
     marginBottom: 50,
     flexDirection: 'row'
   },
   fillCenter: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   text: {
     fontSize: 14,
     textTransform: 'uppercase',
     letterSpacing: 1.7,
     fontWeight: '500',
   },
 });
 