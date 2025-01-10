import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/home">Home</Link>
      <Link href="/create_profile">Create_Profile</Link>
      <Link href="/create_profile">Create_Card</Link>
      <Link href="/create_profile">Settings</Link>
    </View>
  );
}
