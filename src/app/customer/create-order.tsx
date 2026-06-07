import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { addOrder } from '../../utils/storage';

export default function CreateOrder() {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const createOrder = () => {
    addOrder({
      id: String(Date.now()),
      customerName: name,
      pickup,
      dropoff,
      status: 'pending',
    });

    setName('');
    setPickup('');
    setDropoff('');
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>ثبت سفارش</Text>

      <TextInput placeholder='نام مشتری' value={name} onChangeText={setName} />
      <TextInput placeholder='مبدا' value={pickup} onChangeText={setPickup} />
      <TextInput placeholder='مقصد' value={dropoff} onChangeText={setDropoff} />

      <Pressable onPress={createOrder}>
        <Text>ثبت سفارش</Text>
      </Pressable>
    </View>
  );
}
