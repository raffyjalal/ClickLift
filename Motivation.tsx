import React, { useState } from 'react';
import { Text, Image, View, SafeAreaView, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const tipsData = [
  {
    title: 'Stay consistent with your training and your diet',
    imageSource: require('@assets/images/consistency.jpeg'),
  },
  {
    title: 'Your efforts are not meaningless',
    imageSource: require('@assets/images/Efforts.jpeg'),
  },
  {
    title: 'A positive mindset goes a long way',
    imageSource: require('@assets/images/happy.jpeg'),
  },
  {
    title: 'Track your progress and remember you will not see results right away',
    imageSource: require('@assets/images/progress.jpeg'),
  },
  {
    title: 'If you do not know how to do something, just ask',
    imageSource: require('@assets/images/questions.jpg'),
  },
  {
    title: 'Rest days are a necessity for your training',
    imageSource: require('@assets/images/rest.jpg'),
  },
];

export default function TipsTabScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : tipsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < tipsData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <View style={styles.slideshowContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.tipContainer}>
          <Image source={tipsData[currentIndex].imageSource} style={styles.tipImage} />
          <Text style={[styles.tipTitle, { color: isDarkMode ? 'white' : 'black' }]}>
            {tipsData[currentIndex].title}
          </Text>
        </View>

        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideshowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  tipContainer: {
    alignItems: 'center',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  tipImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  arrowButton: {
    padding: 8,
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
