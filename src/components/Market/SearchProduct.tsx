import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Colors } from 'utils/enums';

export interface SearchProductProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
 
const SearchProduct: React.FC<SearchProductProps> = ({search,setSearch}) => {
  return (  
    <SearchBar
      placeholder="¿Qué estas buscando?"
      round
      platform="android"
      containerStyle={styles.conatinerSearch}
      inputContainerStyle={styles.conatinerInput}
      onChangeText={(text: string) => setSearch(text)}
      onClear={() => setSearch("")}
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
