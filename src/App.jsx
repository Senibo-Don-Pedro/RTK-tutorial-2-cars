import CarForm from './components/CarForm'
import CarSearch from './components/CarSearch'
import CarList from './components/CarList'
import CarValue from './components/CarValue'

export default function App() {
  return (
    <main className='flex items-center justify-center min-h-screen bg-teal-100'>
      <div className='bg-white w-[80%] max-w-sm p-5 rounded-lg'>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </main>
  )
}
