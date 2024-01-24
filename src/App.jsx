import CarForm from './components/CarForm'
import CarSearch from './components/CarSearch'
import CarList from './components/CarList'
import CarValue from './components/CarValue'

export default function App() {
  return (
    <main>
      <div className='container is-fluid'>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </main>
  )
}
