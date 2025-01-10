import { View, Text, Image } from 'react-native'; // Added Image import
import React from 'react';
import { Tabs } from 'expo-router';

import icons from '@/constants/icons'; // Ensure this points to your icons correctly

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
    <Image
      source={icon}
      style={{ tintColor: focused ? '#0061ff' : '#666876', width: 24, height: 24 }} // Applied tintColor via styles
    />
    <Text style={{ color: focused ? '#0061ff' : '#666876', fontSize: 10 }}>
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ), // Used the reusable TabIcon component
        }}
      />
            <Tabs.Screen
        name="create_profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.people} title="Profile" />
          ), // Used the reusable TabIcon component
        }}
      />
            <Tabs.Screen
        name="create_card"
        options={{
          title: 'C-Card',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.wallet} title="C-Card" />
          ), // Used the reusable TabIcon component
        }}
      />
            <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.phone} title="Settings" />
          ), // Used the reusable TabIcon component
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
