import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.red}>Welcome to</Text>
        <Text style={styles.bigBlue}>SAAMMAN.COM</Text>
        <Text style={[styles.bigBlue, styles.red]}>Developed by</Text>
        <Text style={[styles.red]}>SHAKIL AHMAD KHAN</Text>

        <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 202,
              backgroundColor: 'skyblue',
            }}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
