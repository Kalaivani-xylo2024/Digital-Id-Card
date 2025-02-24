import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';


const CreateProfile = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');

  const handleSubmit = async () => {
    if (!name || !phoneNumber || !email || !password || !whatsapp || !facebook || !instagram) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    console.log("Sending data:", { name, phoneNumber, email, password, whatsapp, facebook, instagram });

    try {
      const response = await fetch("http://192.168.0.100:5000/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phoneNumber, email, password, whatsapp, facebook, instagram }),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        Alert.alert("Success", "Profile created successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setWhatsapp("");
        setFacebook("");
        setInstagram("");
      } else {
        Alert.alert("Error", data.error || "Failed to create profile");
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      Alert.alert("Error", "Could not connect to the server");
    }
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-4">Create Profile</Text>

      <TextInput className="border border-gray-300 rounded-lg p-3 mb-4 bg-white" placeholder="Name" value={name} onChangeText={setName} />
      <TextInput className="border border-gray-300 rounded-lg p-3 mb-3 bg-white" placeholder="Phone Number" value={phoneNumber} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput className="border border-gray-300 rounded-lg p-3 mb-3 bg-white" placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput className="border border-gray-300 rounded-lg p-3 mb-3 bg-white" placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      {/* Social Media Links */}
      <TextInput className="border border-gray-300 rounded-lg p-3 mb-3 bg-white" placeholder="WhatsApp Profile Link" value={whatsapp} onChangeText={setWhatsapp} />
      <TextInput className="border border-gray-300 rounded-lg p-3 mb-3 bg-white" placeholder="Facebook Profile Link" value={facebook} onChangeText={setFacebook} />
      <TextInput className="border border-gray-300 rounded-lg p-3 mb-3 bg-white" placeholder="Instagram Profile Link" value={instagram} onChangeText={setInstagram} />

      <TouchableOpacity onPress={handleSubmit} className="bg-blue-500 rounded-md py-2 px-4">
        <Text className="text-white text-center font-semibold">Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateProfile;

