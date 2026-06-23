import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.searchWrapper}>
              <Ionicons name="search" size={22} color="#999" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for your favorite food..."
                placeholderTextColor="#999"
              />
              <TouchableOpacity style={styles.filterBtn}>
                <Feather name="sliders" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1a1a1a',
  },
});