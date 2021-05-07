import React from 'react';
import { FireSQL } from 'firesql';
import firebase from 'database/firebase';
import { Collections } from 'utils/enums';
import { ProductI } from 'context/market/interfaces/product.interface';
import {
  LOAD_MYPRODUCTS,
  LOAD_MYPRODUCTS_SUCCESS,
  LOAD_MYPRODUCTS_ERROR,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  MarketDispatchTypes 
} from 'context/market/market.types';
import { UserI } from 'context/user/interfaces/user.interface';

const fireSQL = new FireSQL(firebase.db,{includeId: "uid"});

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

export const loadProductsAction = async(dispatch: React.Dispatch<MarketDispatchTypes>) => {
  dispatch({
    type: LOAD_PRODUCTS,
    payload: true
  })
  try {
    const products = await getAllProducts();
    const createdByProducts = await getCreatedByProduct(products);
    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: createdByProducts
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
      payload: true
    })
  }
}

export const loadProductsCategoryAction = async(category: number,dispatch: React.Dispatch<MarketDispatchTypes>) => {

  dispatch({
    type: LOAD_PRODUCTS,
    payload: true
  })
  try {
    const products = await getProductsCategory(category);
    const productsByCategory = await getCreatedByProduct(products);

    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: productsByCategory
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
      payload: true
    })
  }
}

export const loadProductsSearchAction = async(search: string,dispatch: React.Dispatch<MarketDispatchTypes>) => {
  dispatch({
    type: LOAD_PRODUCTS,
    payload: true
  })
  try {
    const products = await getProductsSearch(search);
    const productsBySearch = await getCreatedByProduct(products);

    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: productsBySearch
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
      payload: true
    })
  }
}

export const getAllProducts = async() => {
  let allProducts = [] as ProductI[];
  const response = await firebase.db.collection(Collections.PRODUCTS).orderBy("createdAt","desc").get();
  response.forEach((item) => {
    const product = item.data() as ProductI;
    product.uid = item.id;
    allProducts.push(product);
  })
  return await Promise.all(allProducts);
}

export const getCreatedByProduct = async(products: ProductI[]) => {
  const createdByProducts = [] as ProductI[];
  await Promise.all(products.map(async (product) => {
    const user = await firebase.db.collection(Collections.USERS).doc(product.createdBy).get();
    product.user = user.data() as UserI;
    createdByProducts.push(product);
  }))
  return createdByProducts;
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

export const getProductsCategory = async(category: number) => {
  let productsCategory = [] as ProductI[];
  const response = await getAllProducts();
  productsCategory = response.filter((product) => product.category === category);
  return await Promise.all(productsCategory);
}

export const getProductsSearch = async(search: string) => {
  const response = await fireSQL.query(`SELECT * FROM Products WHERE title LIKE '${search}%'`);
  return response as ProductI[];
}