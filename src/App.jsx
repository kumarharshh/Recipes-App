import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import SearchResults from './Components/Searchresults'
import './App.css'

function App() {

  return (
    <div className='text-indigo-800'>
      <Header />
      <Sidebar />
      <SearchResults/>
    </div>
  )
}

export default App
