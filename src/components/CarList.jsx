import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'
export default function CarList() {
  const dispatch = useDispatch()

  //destructuring, filter method
  const { carList, name } = useSelector(
    ({ form, carList: { cars, searchTerm } }) => {
      const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

      return {
        carList: filteredCars,
        name: form.name,
      }
    }
  )

  console.log(carList)

  function handleCarDelete(car) {
    dispatch(removeCar(car.id))
  }

  const List = carList.map((car) => {
    //decide if this car should be bold
    //state.form.name

    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className='button is-danger'
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {List}
      <hr />
    </div>
  )
}
