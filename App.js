import React from 'react';
import {ScrollView, StyleSheet, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import CategoryCard from './src/components/CategoryCard';  
import FoodCard from './src/components/FoodCard';          
import BottomNav from './src/components/BottomNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <SearchBar />
        <CategoryCard />
        <FoodCard />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollContent: {
    paddingBottom: 100, // Extra space for bottom nav
  },
  bottomPadding: {
    height: 20,
  },
});