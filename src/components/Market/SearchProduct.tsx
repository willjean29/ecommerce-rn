import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { Colors } from 'utils/enums';

export interface SearchProductProps {
  
}
 
const SearchProduct: React.FC<SearchProductProps> = () => {
  const [search, setSearch] = useState("");
  return (  
    <SearchBar
      placeholder="¿Qué estas buscando?"
      round
      platform="android"
      containerStyle={styles.conatinerSearch}
      inputContainerStyle={styles.conatinerInput}
      onChangeText={(text: string) => setSearch(text)}
      value={search}
    />
  );
}

const styles = StyleSheet.create({
  conatinerSearch: {
    backgroundColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  conatinerInput: {
    borderRadius: 10,
    marginHorizontal: "4%",
    width: "92%",
    marginTop: 10,
    backgroundColor: Colors.WHITE,
    alignItems: "center"
  },

})
 
export default SearchProduct;
