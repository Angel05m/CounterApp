import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
  label: string;
  position?: 'left' | 'right';

  // Method
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label, onLongPress, onPress, position = 'right'
}: Props) {
  return (
    <Pressable
      style={({pressed})=>[
        styles.floatingButton, 
        position === 'right' ? styles.positionRight : styles.positionLeft,
        pressed ? {opacity: 0.7} : {opacity: 1}
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
  },

  positionRight: {
    right: 20,
  },

  positionLeft:{
    left: 20,
  }

})