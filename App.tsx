import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [count, setCount] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB
        label='+1'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        position='right'
      />
      <FAB 
        label='Reset'
        onPress={() => setCount(0)}
        position='left'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 100,
    fontWeight: '100',
  },

});
