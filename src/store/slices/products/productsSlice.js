import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        productsData:[],
        currentProduct:null,//т.е. դատարկ օբյեկտ
    },
    reducers:{
        findCurrentProduct(state,{payload}){    
                  return {
                    ...state,
                    currentProduct:{ 
                        ... state.productsData.find(product => product.id === payload),
                        count:1,
                    } 
                       
                  }         
                       
       }  
    },
    extraReducers:{
       [fetchProducts.fulfilled]:(state,{payload}) =>{
        return {
            ... state,
            productsData:[...payload]
        }
       } 
    }
})

export const selectProduct = state => state.products
export const {findCurrentProduct} = productsSlice.actions
export const productsReducer =  productsSlice.reducer

// export const currentProduct = (id) =>{
//     return {
//         type:'findCurrentProduct',
//         payload:id
//     }
// }