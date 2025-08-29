import { FaSearch } from 'react-icons/fa'
import './SearchBar.scss'

function SearchBar() {
  //Component-------------------------------------------------------------
  return (
    <div className='searchbar'>
        <FaSearch className='searchbar_icon'/>
        <input type="text" className='searchbar_input' placeholder='Search' />
    </div>
  )
}

export default SearchBar