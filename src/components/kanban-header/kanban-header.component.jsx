import React, {useContext, useState} from 'react'
import { KanbanContext } from '../../context/KanbanContext'

function KanbanHeader() {
  const {addBatch} = useContext(KanbanContext)
  const [searchInput, setSearchInput] = useState({search: ""})
  const handleChange = (event) => {
    const {name, value} = event.target;
    setSearchInput(prevInput => ({...prevInput, [name]: value}))
  }
  console.log(searchInput)

  return (
    <div className='d-flex justify-content-around m-2'>
        <button 
          className="btn btn-primary" 
          type="button" 
          onClick={() => addBatch()}>
            Add new extraction batch
        </button>
        <form className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              name="search"
              value={searchInput.search}
              onChange={handleChange}
            />
            <button 
              className="btn btn-outline-success" 
              type="button"
              onClick={() => console.log("Search button clicked")}
            >
              Search
            </button>
        </form>
    </div>
  )
}

export default KanbanHeader