import { configureStore } from '@reduxjs/toolkit'

import {
  carListReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from './slices/carListSlice'

import { changeCost, changeName, formReducer } from './slices/formSlice'

const store = configureStore({
  reducer: {
    carList: carListReducer,
    form: formReducer,
  },
})

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar }
