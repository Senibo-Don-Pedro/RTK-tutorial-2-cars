import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'
export default function CarList() {
  const dispatch = useDispatch()

  const carList = useSelector((state) => {
    return state.carList.cars
  })

  console.log(carList)

  function handleCarDelete(car) {
    dispatch(removeCar(car.id))
  }

  const List = carList.map((car) => (
    <div key={car.id} className='panel'>
      <p>
        {car.name} - ${car.cost}
      </p>
      <button className='button is-danger' onClick={() => handleCarDelete(car)}>
        Delete
      </button>
    </div>
  ))

  return (
    <div className='car-list'>
      {List}
      <hr />
    </div>
  )
}
