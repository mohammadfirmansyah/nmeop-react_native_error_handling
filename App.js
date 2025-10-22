import React, { useState } from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const clickFirstBtn = () => {
    try {
      throw new Error('This is a generic error');
    } catch (error) {
      setError(error.message);
      Alert.alert('Error', 'An unexpected error occurred.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Error Example</Text>
      {error && (
        <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
      )}
      <Pressable style={styles.pressable} onPress={clickFirstBtn} >
        <Text style={styles.pressText}>Button 1</Text>
      </Pressable>

      {data && <Text>{data.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pressable: {
    marginVertical: 10,
    backgroundColor: 'blue',
    padding: '4pt'
  },
  pressText: {
    color: 'white'
  }
});

export default App;