import { createSlice, nanoid } from '@reduxjs/toolkit'

const carListSlice = createSlice({
  name: 'carList',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      // Assumption
      // action.payload === {name: 'ab', cost: 140}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      })
    },
    removeCar(state, action) {
      // Assumption
      // action.payload === the id of the car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload
      })
      state.cars = updated
    },
  },
})

export const { changeSearchTerm, addCar, removeCar } = carListSlice.actions

export const carListReducer = carListSlice.reducer
