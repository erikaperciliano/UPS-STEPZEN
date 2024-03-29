import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image, Input } from '@rneui/themed';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>

const CustomersScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const [input, setInput] = useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  },[]);

  return (
    <ScrollView style={{ backgroundColor: '#59C1CC'}}>
      <Image
        source={{ uri: 'https://links.papareact.com/3jc'}}
        containerStyle={tailwind('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder='Search by Customer'
        value={input}
        onChangeText={setInput}
        containerStyle={tailwind('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  )
}

export default CustomersScreen
