import React, {useContext} from 'react'
import { KanbanContext } from '../../context/KanbanContext'

function KanbanHeader({batchNumber, handleAddBatch}) {
  const {addBatch} = useContext(KanbanContext)
  
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
              aria-label="Search" />
            <button 
              className="btn btn-outline-success" 
              type="submit">Search
            </button>
        </form>
    </div>
  )
}

export default KanbanHeader