import React from 'react'
import { addData } from '../../utils/firebase/firebase'

function KanbanHeader() {
  
  return (
    <div className='d-flex justify-content-around m-2'>
        <button 
          className="btn btn-primary" 
          type="button" 
          onClick={() => addData()}>
            Add new extraction batch
        </button>
        <form className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" />
            <button 
              className="btn btn-outline-success" 
              type="button"
              onClick={() => alert('Search button function TBD!')}
            >
              Search
            </button>
        </form>
    </div>
  )
}

export default KanbanHeader