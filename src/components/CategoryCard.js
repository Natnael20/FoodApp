import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Pizza', icon: 'pizza', color: '#ff6b6b', bg: '#fff0f0' },
  { id: 2, name: 'Burger', icon: 'hamburger', color: '#ff9f43', bg: '#fff5eb' },
  { id: 3, name: 'Sushi', icon: 'fish', color: '#ff6b9d', bg: '#fff0f5' },
  { id: 4, name: 'Salad', icon: 'leaf', color: '#2ed573', bg: '#f0fff4' },
  { id: 5, name: 'Pasta', icon: 'noodles', color: '#ff6b6b', bg: '#fff5f5' },
  { id: 6, name: 'Dessert', icon: 'cake', color: '#ffb8b8', bg: '#fff8f8' },
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All →</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryCard}>
            <View style={[styles.iconContainer, { backgroundColor: item.bg }]}>
              <MaterialCommunityIcons name={item.icon} size={34} color={item.color} />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  seeAll: {
    color: '#ff6b6b',
    fontWeight: '600',
    fontSize: 14,
  },
  scrollView: {
    paddingLeft: 24,
  },
  scrollContent: {
    paddingRight: 24,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  iconContainer: {
    width: 76,
    height: 76,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryName: {
    fontSize: 13,
    color: '#2d2d2d',
    fontWeight: '600',
  },
});