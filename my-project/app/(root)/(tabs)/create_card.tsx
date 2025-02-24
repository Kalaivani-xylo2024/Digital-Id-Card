import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CardScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    if (!name || !password) {
      Alert.alert('Error', 'Please enter name and password');
      return;
    }

    try {
      const response = await fetch(`http://192.168.0.100:5000/api/get-profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data); // Store user data to generate QR code
      } else {
        Alert.alert('Error', data.error || 'Profile not found');
      }
    } catch (error) {
      console.log('Fetch Error:', error);
      Alert.alert('Error', 'Could not connect to the server');
    }
  };

  return (
    <View className="flex-1 p-6 bg-gray-100 items-center">
      <Text className="text-2xl font-bold mb-4">Fetch NFC Card</Text>

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 bg-white w-full"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 bg-white w-full"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={fetchUserData} className="bg-blue-500 rounded-md py-2 px-4 w-full">
        <Text className="text-white text-center font-semibold">Fetch Card</Text>
      </TouchableOpacity>

      {userData && (
        <View className="mt-6 items-center">
          <Text className="text-lg font-bold">Your QR Code</Text>
          <QRCode value={JSON.stringify(userData)} size={200} />
        </View>
      )}
    </View>
  );
};

export default CardScreen;
