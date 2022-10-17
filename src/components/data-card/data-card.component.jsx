import React from 'react';

import DataCardDropdown from '../data-card-dropdown/data-card-dropdown.component'
import DataCardStatus from '../data-card-status/data-card-status.component';

import './data-card.styles.css'

function DataCard({ batch }) {
  return (
    <div>
      {/* If there is data, display batch card */}
      {batch.length > 0 
      ? (batch.map(data => (
        <div key={data.batchId} className='card mb-2'>
          {/* Card header: batch ID number and dropdown menu */}
          <div className="card-header">
            <div className="btn-group float-end" role="group">
            <DataCardDropdown data={data} />
          </div>
          <p className='card-title'>Batch ID: 0000{data.batchId}</p>
          </div>
          {/* Card body: progress bar and countdown */}
          <DataCardStatus data={data} />
        </div>
        )))

      // If there is no data, show no pending batches message
      : (<div className='alert alert-primary' role='alert'>
          <span>No pending batches</span>
        </div>)
      }
    </div>
  )
}

export default DataCard