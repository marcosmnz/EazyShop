/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { toast } from 'react-toastify';

import {
    createContext,
    useContext,
    useEffect,
    useReducer
  } from 'react'

  const initialStore = {
    products: [],
    totalAmounted: 0,
    carritoModal: false,
    guardados: [],
    darkmode: false,
    loading: false
  }
  

  const reducer = (state, action) => {
    if (action.type === 'ADD_PRODUCT') {

      const existingProduct = state.products.find(product => product.id === action.payload.id);

      if (existingProduct) {
        const updatedProducts = state.products.map(product =>
          product.id === action.payload.id ? { ...product, cantidad: product.cantidad + 1 } : product
        );
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        const newProduct = { ...action.payload, cantidad: 1 };
        return {
          ...state,
          products: [...state.products, newProduct],
        };}
    }
  
    if (action.type === 'REMOVE_PRODUCT') {
      const productIdToRemoveQuantity = action.payload;
      const updatedProductsAfterRemove = state.products.map(product =>
        product.id === productIdToRemoveQuantity
          ? { ...product, cantidad: Math.max(0, product.cantidad - 1) }
          : product
      );
      const updatedProductsFiltered = updatedProductsAfterRemove.filter(product => product.cantidad > 0);
      return {
        ...state,
        products: updatedProductsFiltered,
      };
    }
  
    if (action.type === 'SAVE_PRODUCTOS') {
      return {
        ...state,
        guardados: [...state.guardados, action.payload]
      }
    }

    if (action.type === 'CALCULATE_TOTAL_PRICE'){
      const totalPrice = state.products.reduce((total, product) => {
        return total + product.price * product.cantidad;
      }, 0);
      return {
        ...state,
        totalAmounted: totalPrice,
      };
    }

    if(action.type === 'DELETE_ALL_PRODUCTS') {
      return {
        ...state,
        products: [],
      };
    }
  }
  

  const saveStateToLocalStorage = (state) => {
    const stringState = JSON.stringify(state)
    localStorage.setItem('cart', stringState)
  }
  
  const loadStateFromLocalStorage = () => {
    const prevCart = localStorage.getItem('cart')
    if (prevCart === null) return initialStore
    return JSON.parse(prevCart)
  }
  
  // CREAR EL CONTEXTO
  const context = createContext()
  const Provider = context.Provider

  const ContextGlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialStore, loadStateFromLocalStorage)
  

    useEffect(() => {
      saveStateToLocalStorage(state)
    }, [state])
  
    const addProduct = (producto) => {
      toast.success('😮‍💨 Se agregó al carrito!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: producto.id
        });
      dispatch({
        type: 'ADD_PRODUCT',
        payload: producto
      })
      dispatch({
        type: 'CALCULATE_TOTAL_PRICE',
      });
    }
  
    const removeProduct = (id) => {
      toast.error('🫡 Se eliminó del carrito!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      dispatch({
        type: 'REMOVE_PRODUCT',
        payload: id
      })
      dispatch({
        type: 'CALCULATE_TOTAL_PRICE',
      });
    }
    const deleteAllProducts = () => {
      toast.error('😭 Se eliminó todo el carrito!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      dispatch({
        type: 'DELETE_ALL_PRODUCTS',
      });
      dispatch({
        type: 'CALCULATE_TOTAL_PRICE',
      });
    };
  
    return (
      <Provider value={{
        addProduct,
        removeProduct,
        deleteAllProducts,
        state
      }}>
          { children }
      </Provider>
    )
  }
  
  function useGlobalContext () {
    return useContext(context)
  }
  
  export {
    ContextGlobalProvider as default,
    useGlobalContext
  }
  