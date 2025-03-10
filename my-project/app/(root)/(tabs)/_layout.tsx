import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import icons from "@/constants/icons"; // Ensure this points to your icons correctly

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    {/* Icon */}
    <Image
      source={icon}
      className={`w-5 h-5 ${focused ? "tint-blue-1000" : "tint-gray-600"}`} // Dynamic tint color
    />
    {/* Title */}
    {/* <Text className={`text-xs mt-0  ${focused ? "text-blue-600" : "text-gray-500"}`}>
      {title}
    </Text> */}
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true, // Hides labels (handled by TabIcon)
        tabBarStyle: {
          backgroundColor: "white",
          position: "fixed",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 60,
          
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      
      {/* Profile Tab */}
      <Tabs.Screen
        name="CreateProfile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.people} title="Profile" />
          ),
        }}
      />
      {/* Card Tab */}
      <Tabs.Screen
        name="create_card"
        options={{
          title: "Create-Card",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.wallet} title="Create-Card" />
          ),
        }}
      />
      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.phone} title="Settings" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
