import React, { useState } from 'react';
import { StatusBar, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setMessage('You pressed the button!');
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, I am Geetesh 22BAI1385</Text>
      <Button title="Click me" onPress={handleButtonClick} color="#841584" />
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF', 
  },
  message: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    color: '#FFFFFF', 
  },
  counter: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
});
