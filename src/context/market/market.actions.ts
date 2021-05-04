import React from 'react';
import firebase from 'database/firebase';
import { Collections } from 'utils/enums';
import { ProductI } from 'context/market/interfaces/product.interface';
import {
  LOAD_MYPRODUCTS,
  LOAD_MYPRODUCTS_SUCCESS,
  LOAD_MYPRODUCTS_ERROR,
  MarketDispatchTypes 
} from 'context/market/market.types';

export const loadMyProductsAction = async(id: string, dispatch: React.Dispatch<MarketDispatchTypes>) => {
  dispatch({
    type: LOAD_MYPRODUCTS,
    payload: true
  })
  try {
    const myProduts = await getMyProducts(id);
    dispatch({
      type: LOAD_MYPRODUCTS_SUCCESS,
      payload: myProduts
    })
  } catch (error) {
    dispatch({
      type: LOAD_MYPRODUCTS_ERROR,
      payload: true
    })
  }
}

export const getMyProducts = async(id: string) => {
  let myProducts = [] as ProductI[];
  const response = await firebase.db.collection(Collections.PRODUCTS).orderBy("createdAt","desc").get();
  response.forEach((item) => {
    if(item.data().createdBy === id){
      const product = item.data() as ProductI;
      product.uid = item.id;
      myProducts.push(product);
    }
  })
  return await Promise.all(myProducts);
}
