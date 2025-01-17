import React from 'react';
import { View, Text, Switch } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsPage = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const toggleDarkMode = () => setIsDarkModeEnabled(!isDarkModeEnabled);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="px-4">
        <Text className="text-2xl font-bold text-center mt-4 mb-6">Settings</Text>

        {/* Notification Settings */}
        <View className="bg-white p-4 mb-4 rounded-lg shadow-sm">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-medium">Enable Notifications</Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={toggleNotifications}
              trackColor={{ false: "#767577", true: "#4CAF50" }}
              thumbColor={isNotificationsEnabled ? "#FFFFFF" : "#f4f3f4"}
            />
          </View>
        </View>

        {/* Dark Mode Settings */}
        <View className="bg-white p-4 mb-4 rounded-lg shadow-sm">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-medium">Dark Mode</Text>
            <Switch
              value={isDarkModeEnabled}
              onValueChange={toggleDarkMode}
              trackColor={{ false: "#767577", true: "#4CAF50" }}
              thumbColor={isDarkModeEnabled ? "#FFFFFF" : "#f4f3f4"}
            />
          </View>
        </View>

        {/* Account Settings */}
        <View className="bg-white p-4 mb-4 rounded-lg shadow-sm">
          <Text className="text-lg font-medium mb-2">Account</Text>
          <Text className="text-gray-600">Manage your account details and preferences.</Text>
        </View>

        {/* Privacy Settings */}
        <View className="bg-white p-4 mb-4 rounded-lg shadow-sm">
          <Text className="text-lg font-medium mb-2">Privacy</Text>
          <Text className="text-gray-600">Control your privacy and security settings.</Text>
        </View>

        {/* About Section */}
        <View className="bg-white p-4 rounded-lg shadow-sm">
          <Text className="text-lg font-medium mb-2">About</Text>
          <Text className="text-gray-600">Learn more about this app and its features.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsPage;