import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const foods = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic tomato & mozzarella',
    price: '$12.99',
    rating: 4.8,
    emoji: '🍕',
    bg: '#fff5f5',
    reviews: 234,
  },
  {
    id: 2,
    name: 'Classic Burger',
    description: 'Beef with caramelized onions',
    price: '$9.99',
    rating: 4.6,
    emoji: '🍔',
    bg: '#fff8f0',
    reviews: 189,
  },
  {
    id: 3,
    name: 'California Roll',
    description: 'Fresh crab & avocado',
    price: '$14.99',
    rating: 4.9,
    emoji: '🍣',
    bg: '#f5f0ff',
    reviews: 312,
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Crispy romaine & parmesan',
    price: '$8.99',
    rating: 4.5,
    emoji: '🥗',
    bg: '#f0fff4',
    reviews: 156,
  },
  {
    id: 5,
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with bacon',
    price: '$13.99',
    rating: 4.7,
    emoji: '🍝',
    bg: '#fff8e7',
    reviews: 198,
  },
  {
    id: 6,
    name: 'Chocolate Cake',
    description: 'Rich chocolate with ganache',
    price: '$7.99',
    rating: 4.9,
    emoji: '🍰',
    bg: '#f7f0f0',
    reviews: 267,
  },
  {
    id: 7,
    name: 'Chicken Wings',
    description: 'Spicy buffalo wings',
    price: '$10.99',
    rating: 4.4,
    emoji: '🍗',
    bg: '#fff5f0',
    reviews: 145,
  },
  {
    id: 8,
    name: 'Veggie Bowl',
    description: 'Fresh vegetables & quinoa',
    price: '$11.99',
    rating: 4.3,
    emoji: '🥑',
    bg: '#f0fff4',
    reviews: 123,
  },
];

export default function FoodCard() {
  const renderFoodItem = ({ item }) => (
    <TouchableOpacity style={[styles.foodCard, { backgroundColor: item.bg }]}>
      <View style={styles.cardHeader}>
        <View style={styles.emojiContainer}>
          <Text style={styles.foodEmoji}>{item.emoji}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={14} color="#ffa502" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodDescription} numberOfLines={1}>
        {item.description}
      </Text>
      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.foodPrice}>{item.price}</Text>
          <Text style={styles.reviews}>{item.reviews} reviews</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <MaterialIcons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All →</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={foods}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={false} // Disable internal scrolling
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1,
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
  flatListContent: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  foodCard: {
    width: '48%',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  emojiContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodEmoji: {
    fontSize: 28,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  foodName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  foodDescription: {
    fontSize: 12,
    color: '#8e8e93',
    marginBottom: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodPrice: {
    fontSize: 17,
    fontWeight: '800',
    color: '#ff6b6b',
  },
  reviews: {
    fontSize: 11,
    color: '#8e8e93',
    marginTop: 2,
  },
  addBtn: {
    backgroundColor: '#ff6b6b',
    width: 34,
    height: 34,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});