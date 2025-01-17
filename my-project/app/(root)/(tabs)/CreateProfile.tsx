import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import {Image,TouchableOpacity}from 'react-native';
import icons from "@/constants/icons";

export default function CreateProfile(){
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [Password,setPassword]=useState('');

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-4">Create Profile</Text>

            {/* Name Input */}
     <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 bg-white mr-7 ml-7"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />


      {/* Phone Number Input */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3 bg-white mr-7 ml-7"
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
 
      {/* Email Input */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3 bg-white mr-7 ml-7"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
        <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3 bg-white mr-7 ml-7"
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
       
      />
     {/* Button */}
   <TouchableOpacity
     className="bg-blue-500 rounded-md py-2 px-4 mr-7 ml-7">
      <Text className="text-white text-center font-semibold">Save Profile</Text>
    </TouchableOpacity>

       <Text className='text-center font-bold mt-5'>(or)</Text>
  

{/* Social Media Links */}
<Text className="text-lg  text-center font-semibold mb-3 mt-3"> Use Social Media Links</Text>

<TouchableOpacity
      className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
      <View className="flex flex-row items-center justify-center">
        <Image
          source={icons.google}
          className="w-6 h-6"
          resizeMode="contain"
        />
        <Text className="text-lg font-rubik-medium text-black-300 ml-2">
          Continue with Google
        </Text>
      </View>
</TouchableOpacity>
<TouchableOpacity
      className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
      <View className="flex flex-row items-center justify-center">
        <Image
          source={icons.fb}
          className="w-6 h-6"
          resizeMode="contain"
        />
        <Text className="text-lg font-rubik-medium text-black-300 ml-2">
          Continue with Facebook
        </Text>
      </View>
</TouchableOpacity>
<TouchableOpacity
      className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
    >
      <View className="flex flex-row items-center justify-center">
        <Image
          source={icons.insta}
          className="w-6 h-6"
          resizeMode="contain"
        />
        <Text className="text-lg font-rubik-medium text-black-300 ml-2">
          Continue with Instagram
        </Text>
      </View>
</TouchableOpacity>
</ScrollView>          
  );
};




