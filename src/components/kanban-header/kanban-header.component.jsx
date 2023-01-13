import React, { useContext } from 'react'
import { KanbanContext } from '../../context/KanbanContext'
import './kanban-header.styles.css'

function KanbanHeader() {
  const { addBatch } = useContext(KanbanContext);
  
  return (
    <div className='d-flex justify-content-around m-2'>
        <button 
          className="add-button btn btn-primary" 
          type="button" 
          onClick={addBatch}>
            Add new extraction batch
        </button>
        <form className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Batch number" 
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