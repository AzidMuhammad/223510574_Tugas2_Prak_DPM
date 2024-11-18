import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>TUGAS 2 PRAK DPM</Text>

      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.leftBox]} />
        <View style={[styles.box, styles.rightBox]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    paddingHorizontal: 16,
  },
  centerText: {
    fontSize: 24,
    color: '#191970',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  leftBox: {
    backgroundColor: '#880808',
  },
  rightBox: {
    backgroundColor: '#0e0e0e',
  },
});
