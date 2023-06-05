import { createStore } from 'vuex'
import  products  from './modules/products'
import bikes from './modules/bikes'

export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    products,
    bikes
  }
})
