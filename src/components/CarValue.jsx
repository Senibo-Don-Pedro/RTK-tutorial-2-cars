import { useSelector } from 'react-redux'

export default function CarValue() {
  const totalCost = useSelector(({ carList: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return filteredCars.reduce((acc, car) => {
      return acc + car.cost
    }, 0)
  })

  return <div className='car-value'>Total Cost : ${totalCost}</div>
}
