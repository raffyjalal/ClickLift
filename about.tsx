import React from 'react';
import { Text, View, useColorScheme, StyleSheet } from 'react-native';
import { HorizontalSeparator } from '@components/HorizontalSeparator';

export default function AboutTabScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <Text style={[styles.title, { color: isDarkMode ? 'white' : 'black' }]}>Mission Statement</Text>
      <HorizontalSeparator />
      <Text style={[styles.description, { color: isDarkMode ? 'white' : 'black' }]}>
        Our mission at ClickLift is to empower individuals in their pursuit of physical fitness and wellness through a comprehensive and user-friendly application.
        We strive to provide a personalized and adaptive experience that is tailored to meet the unique needs of each user.
        Our goal is to make fitness accessible to people of all ages and backgrounds by providing a simple, intuitive, and visually appealing interface that is easy to navigate and use.
        We are dedicated to providing a valuable and effective tool that will aid users in achieving their fitness goals and unlocking their full potential.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
