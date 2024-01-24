// usedisptch used to change state
//useselector used to get access of current state from the slice
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost, addCar } from '../store'

export default function CarForm() {
  const dispatch = useDispatch()

  // get name and cost from formslice
  // destructure name and cost
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    }
  })

  function handleNameChange(event) {
    dispatch(changeName(event.target.value))
  }

  function handleCostChange(event) {
    // this is to check if the user submits NAN. if the user does, display 0
    const carCost = parseInt(event.target.value) || 0
    dispatch(changeCost(carCost))
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(
      addCar({
        //name and cost can be shortened because they have the same name, but for understanding, ill leave it like this
        name: name,
        cost: cost,
      })
    )
    //empty out the form after submission
    dispatch(changeName(''))
    dispatch(changeCost(0))
  }

  return (
    <div className='border'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input
              className='input is-expanded'
              // because 0 is showing, display either cost or 0
              value={cost || ''}
              onChange={handleCostChange}
              type='number'
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  )
}
