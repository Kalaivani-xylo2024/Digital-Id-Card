import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    Alert.alert('QR Code Scanned!', `Data: ${data}`);

    try {
      const response = await fetch("http://192.168.0.100:5000/api/update-scan-count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data }), // Data should be the name stored in QR
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", `Scan count updated! New count: ${result.scanCount}`);
      } else {
        Alert.alert("Error", result.error || "Failed to update scan count");
      }
    } catch (error) {
      console.error("Error updating scan count:", error);
      Alert.alert("Error", "Could not connect to the server");
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View className="flex-1 justify-center items-center">
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ width: '100%', height: 400 }}
      />
      {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
};

export default ScanScreen;
