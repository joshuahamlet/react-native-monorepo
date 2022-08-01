/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Test } from './components/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';


const Stack = createNativeStackNavigator()

function Box({ route, navigation }) {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255),
        },
      ],
    };
  });

  const leDeets = route.params.deets

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} >
        <Text style={{color: 'black'}}>{leDeets}</Text>
      </Animated.View>
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
      <Button
        color="purple"
        title="Go to Box... again"
        onPress={() => navigation.push('Box', {deets: "redux"})}
      />
      <Button
        color="red"
        title='update'
        onPress={() => navigation.setParams({
          deets: 'update',
        })
        }
      />
    </>
  );
}

function TestingOneTwo({ navigation }) {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: 'black'}}>Home Screen</Text>
        <Button title='boop it' onPress={() => navigation.navigate('Box', {deets: "uno"})}/>
      </View>
    </SafeAreaView>
    )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Test'>
          <Stack.Screen name="Box" component={Box}/>
          <Stack.Screen name="Test" component={TestingOneTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 1000,
    backgroundColor: 'green'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'    
  }
});

export default App;
