/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// API CONTEXT + REDUCER = redux
// LAS ACCIONES
// funciones asyncronas
import { ToastContainer, toast } from 'react-toastify';

import {
    createContext,
    useContext,
    useEffect,
    useReducer
  } from 'react'
  
  // primero paso y el por que necesitamos un reducer
  // importamos el useReducer // va transforma el estado // no ayudara a no mutar el estado, escalar de forma mas comoda el contexto
  // cuando tenemos muchas acciones
  // almancen de todas las funciones importantes, login, guardo bd, localstorage, abrir modals.
  
  // segundo paso creamos un store inicial
  const initialStore = {
    products: [],
    carritoModal: false,
    guardados: [],
    darkmode: false,
    loading: false
  }
  
  // tercer paso crear el reducer // actiones que nos permitiran cambiar o modificar el estado inicial
  const reducer = (state, action) => {
    // accion con dos tipos de acciones
    // type => que es lo que quiero hacer con el contexto global
    // payload => nuevo objeto
    if (action.type === 'ADD_PRODUCT') {

      const existingProduct = state.products.find(product => product.id === action.payload.id);

      if (existingProduct) {
        // Si el producto ya está en el carrito, aumentar la cantidad en 1
        const updatedProducts = state.products.map(product =>
          product.id === action.payload.id ? { ...product, cantidad: product.cantidad + 1 } : product
        );
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        // Si el producto no está en el carrito, agregarlo con cantidad inicial de 1
        const newProduct = { ...action.payload, cantidad: 1 };
        return {
          ...state,
          products: [...state.products, newProduct],
        };}
    }
  
    if (action.type === 'REMOVE_PRODUCT') {
      // TODO: TAREA => SACAR EL OBJETO POR ID
      const productIdToRemove = action.payload;
      // Filter out the product with the given ID from the products array
      const updatedProducts = state.products.filter(product => product.id !== productIdToRemove);
      return {
        ...state,
        products: updatedProducts,
      };
    }
  
    if (action.type === 'SAVE_PRODUCTOS') {
      return {
        ...state,
        guardados: [...state.guardados, action.payload]
      }
    }
    // acciones de la tienda
    // Añadir productos al carrito
    // Borrar productos del carrito
    // Borrar todo el carrito
    //
    // if (action.type)
  }
  
  // 🤖🤖🧠🧠🧠
  const saveStateToLocalStorage = (state) => {
    const stringState = JSON.stringify(state)
    // con el id del usuario
    localStorage.setItem('cart', stringState)
  }
  
  // 🤖🤖🧠🧠🧠
  // recuperar el estado previo en localStorage
  const loadStateFromLocalStorage = () => {
    const prevCart = localStorage.getItem('cart')
    if (prevCart === null) return initialStore
    return JSON.parse(prevCart)
  }
  
  // CREAR EL CONTEXTO
  const context = createContext()
  const Provider = context.Provider
  const ContextGlobalProvider = ({ children }) => {
    // compra => STRIPE // MERCADO PAGO // PAYPAL
    // CUARTO paso = LA IMPLEMENTACION
    // ♻️ COMO TERCER PARAMETRO LE PASAMOS UNA FUNCION QUE RECUPERA EL ESTADO DE LOCAL STORAGE
    const [state, dispatch] = useReducer(reducer, initialStore, loadStateFromLocalStorage)
  
    // PASO 1 ♻️ => EJECUTAMOS UN USEEFFECT PARA ESCUCHAR CADA VEZ QUE EL DISPATCH, ACTUALICE EL ESTADO
    useEffect(() => {
      // PASO DOS ♻️ => OCUPAMOS UNA FUNCION QUE PERMITA GUARDA EL ESTADO EN LOCALSTORAGE
      saveStateToLocalStorage(state)
    }, [state])
  
    // BUENA PRACTICA QUE LAS FUNCIONES ESTEN DENTRO DEL MISMO ESTADO
    const addProduct = (producto) => {
      toast('🦄 Se agregó al carrito!', {
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
        type: 'ADD_PRODUCT',
        payload: producto
      })
    }
  
    const removeProduct = (id) => {
      toast('🫡 Se eliminó del carrito!', {
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
    }
  
    return (
      <Provider value={{
        addProduct,
        removeProduct,
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
  