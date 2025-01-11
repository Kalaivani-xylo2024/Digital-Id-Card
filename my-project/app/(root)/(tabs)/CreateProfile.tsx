// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export class CreateProfile extends Component {
//   render() {
//     return (
//       <View>
//         <Text>CreateProfile</Text>
//       </View>
//     )
//   }
// }

// export default CreateProfile

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const CreateProfile: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [socialLinks, setSocialLinks] = useState<string[]>(['', '', '']); // Fixed size of 3 links

  const handleSocialLinkChange = (index: number, value: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = value;
    setSocialLinks(updatedLinks);
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-4">Create Profile</Text>

      {/* Name Input */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3 bg-white"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Phone Number Input */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3 bg-white"
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Email Input */}
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3 bg-white"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Social Media Links */}
      <Text className="text-lg font-semibold mb-2">Social Media Links</Text>
      {socialLinks.map((link, index) => (
        <TextInput
          key={index}
          className="border border-gray-300 rounded-lg p-3 mb-3 bg-white"
          placeholder={`Link ${index + 1}`}
          value={link}
          onChangeText={(value) => handleSocialLinkChange(index, value)}
        />
      ))}

      {/* Save Profile Button */}
      <Button title="Save Profile" onPress={() => console.log({ name, phone, email, socialLinks })} />
    </ScrollView>
  );
};

export default CreateProfile;


