import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import MarketContext from 'context/market/market.context';
import { CategoryTypes, Colors } from 'utils/enums';

export interface SearchProductProps {
  setCategory: React.Dispatch<React.SetStateAction<number>>
}
 
const SearchProduct: React.FC<SearchProductProps> = ({setCategory}) => {
  const [search, setSearch] = useState("");
  const {loadProductsSearch, loadAllProducts} = useContext(MarketContext);
  useFocusEffect(
    useCallback(() => {
      if(search !== ""){
        setCategory(CategoryTypes.DEFAULT);
        loadProductsSearch(search);
      }else{
        setCategory(CategoryTypes.DEFAULT);
        loadAllProducts();
      }
    }, [search])
  )

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
