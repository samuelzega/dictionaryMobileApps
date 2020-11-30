import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#3498DB',
    margin: 10,
    borderRadius: 10,
  },
});

export default function Button({title, action}) {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
