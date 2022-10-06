import React from 'react'

function KanbanHeader({batchNumber, handleAddBatch}) {
  return (
    <div className='d-flex justify-content-around m-2'>
        <button className="btn btn-primary" type="button" onClick={() => handleAddBatch()}>Add new extraction batch: {batchNumber}</button>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  )
}

export default KanbanHeader