import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import { RootStackParamList } from '../../../App';
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View className="flex h-screen items-center justify-center bg-red-500">
      <Text> Screen Content </Text>
      <Button title="Click Me" onPress={() => alert('Test src nè!')} />
      <Button title="Go to Detail" onPress={() => navigation.navigate('Details')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
