import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import images from "@/constants/images";

export default function NFCCard() {
  const [name, setName] = useState(""); // State for the name
  const [cardLink, setCardLink] = useState(""); // State for the card link
  const [scanCount, setScanCount] = useState(0); // State for scan count

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-blue-600 py-2">
        <Text className="text-white text-center text-xl font-bold">NFC CARD</Text>
      </View>

      {/* Welcome Section */}
      <View className="flex-0 justify-center items-center px-3 py-3 mt-5">
        <Text className="text-2xl font-bold text-gray-800 text-center mb-10">
          Welcome to Near-Field Communication
        </Text>
        <Text className="text-gray-600 text-center text-base">
          Effortlessly connect, share, and track with NFC technology.
        </Text>
      </View>

      <Image
          source={images.nfcImage}
          className="w-40 h-40 ml-36"
        />
      {/* Main Content */}
      <View className="flex-1 items-center justify-center bg-gray-100 p-5 mb-11">
        {/* Card Container */}
        <View className="bg-white w-11/12 rounded-lg shadow-lg p-6">
          {/* Name Input */}
          <Text className="text-gray-800 font-semibold mb-1">Enter Name:</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />

          {/* Card Link Input */}
          <Text className="text-gray-800 font-semibold mb-1">Enter Card Link:</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            placeholder="Enter Card Link"
            value={cardLink}
            onChangeText={setCardLink}
          />

          {/* Display Name */}
          {name ? (
            <Text className="text-xl font-bold text-gray-800 mb-2">{name}</Text>
          ) : null}

          {/* Display Card Link */}
          {cardLink ? (
            <Text className="text-blue-500 underline text-sm mb-4">
              {cardLink}
            </Text>
          ) : null}

          {/* Scan Count */}
          <Text className="text-gray-700 text-base mb-4">
            Scans: <Text className="font-bold">{scanCount}</Text>
          </Text>

          {/* Button */}
          <TouchableOpacity
            className="bg-blue-500 rounded-md py-2 px-4"
          >
            <Text className="text-white text-center font-semibold">Scan Count</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
