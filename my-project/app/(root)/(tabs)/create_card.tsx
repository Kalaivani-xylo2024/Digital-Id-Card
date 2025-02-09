import React from 'react';
import { View, Text, Image,  } from 'react-native';
import images from "@/constants/images";



const CreateCard = ({ profile }) => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Your Profile Card</Text>
      <View className="  p-4 border rounded-lg shadow w-80 items-center">
        <Image 
        //  source={images.avatar}
        className="w-32 h-32 rounded-full mb-4"/>
        <Text className="text-lg font-semibold">{profile.name || 'Anonymous'}</Text>
      </View>
      
    </View>
   

  );
};

// Example Profile Data
const profileData = {
  cardUrl: 'https://via.placeholder.com/150',
  name: 'John Doe',
};

export default function App() {
  return <CreateCard profile={profileData} />;
}

