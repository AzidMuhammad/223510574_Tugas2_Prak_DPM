import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#000' }}
      headerImage={
        <Image
          source={require('@/assets/images/fav-icon.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Biodata Singkat</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.label}>Nama:</ThemedText>
        <ThemedText style={styles.value}>Hamba Allah</ThemedText>

        <ThemedText style={styles.label}>Profesi:</ThemedText>
        <ThemedText style={styles.value}>Prompt Engineer</ThemedText>

        <ThemedText style={styles.label}>Lokasi:</ThemedText>
        <ThemedText style={styles.value}>Pekanbaru, Indonesia</ThemedText>

        <ThemedText style={styles.label}>Hobi:</ThemedText>
        <ThemedText style={styles.value}>Bersepeda, Membaca, Coding</ThemedText>

        <ThemedText style={styles.label}>Tentang Saya:</ThemedText>
        <ThemedText style={styles.value}>
          Saya seorang pengembang perangkat lunak yang bersemangat untuk membangun solusi inovatif 
          menggunakan teknologi modern. Saya suka belajar hal-hal baru dan berbagi pengetahuan.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});
