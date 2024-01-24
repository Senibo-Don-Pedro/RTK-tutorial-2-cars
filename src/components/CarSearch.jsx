import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../store'

export default function CarSearch() {
  const dispatch = useDispatch()

  const searchTerm = useSelector((state) => {
    return state.carList.searchTerm
  })

  function handleSearchTermChange(event) {
    dispatch(changeSearchTerm(event.target.value))
  }

  return (
    <div className='list-header'>
      <h3 className='title is-3'>My Cars</h3>
      <div className='search field is-horizontal'>
        <label htmlFor='' className='label'>
          Search
        </label>
        <input
          value={searchTerm}
          onChange={handleSearchTermChange}
          className='input'
        />
      </div>
    </div>
  )
}
