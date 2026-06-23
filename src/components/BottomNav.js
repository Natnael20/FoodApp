import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const navItems = [
  { id: 1, icon: 'home', label: 'Home', active: true, type: 'Ionicons' },
  { id: 2, icon: 'heart', label: 'Favorites', active: false, type: 'Ionicons' },
  { id: 3, icon: 'shopping-bag', label: 'Cart', active: false, type: 'Feather' },
  { id: 4, icon: 'person', label: 'Profile', active: false, type: 'Ionicons' },
];

const getIcon = (item) => {
  const { icon, type, active } = item;
  const color = active ? '#ff6b6b' : '#999';
  const size = 26;
  
  if (type === 'Ionicons') {
    return <Ionicons name={icon} size={size} color={color} />;
  } else if (type === 'Feather') {
    return <Feather name={icon} size={size} color={color} />;
  } else if (type === 'MaterialIcons') {
    return <MaterialIcons name={icon} size={size} color={color} />;
  }
};

export default function BottomNav() {
  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity key={item.id} style={styles.navItem}>
          <View style={[styles.iconWrapper, item.active && styles.activeIconWrapper]}>
            {getIcon(item)}
          </View>
          <Text style={[styles.label, item.active && styles.activeLabel]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 2,
  },
  iconWrapper: {
    padding: 8,
    borderRadius: 12,
  },
  activeIconWrapper: {
    backgroundColor: '#ff6b6b15',
  },
  label: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
  },
  activeLabel: {
    color: '#ff6b6b',
    fontWeight: '700',
  },
});