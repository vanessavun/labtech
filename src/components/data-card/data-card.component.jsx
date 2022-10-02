import React from 'react';
import ProgressBar from '../progress-bar/progress-bar.component';

function DataCard({ labdata }) {

  return (
    <div>
      {/* If there is data */}
      {labdata.length > 0 ? (labdata.map(data => (
        <div key={data.batchID} className='card mb-2'>
          <div className="card-header">
            <div className="btn-group float-end" role="group">
              <button type="button" className="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false" >
              </button>
              <ul className="dropdown-menu"> {/* // eslint-disable-next-line */}
                <li><a className="dropdown-item" href="http://localhost:3000/">Start run</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Fail run</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Rerun batch</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Re-extract</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Batch information</a></li> 
              </ul>
            </div>
            <p className='card-title'>Batch ID: {data.batchID}</p>
          </div>
          <div className='card-body'>
            <p className="card-subtitle mb-2 text-muted">Status: <i>{data.status}</i></p>
            <div className="progress">
              <ProgressBar timeLeft={data.timeLeft} />              
            </div>
          </div>
        </div>
      )))
      // If there is no data
      : (<div key='test' className='card mb-2'>
      <div className="card-header">
        <div className="btn-group float-end" role="group">
          <button type="button" className="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false" >
          </button>
          <ul className="dropdown-menu"> {/* // eslint-disable-next-line */}
            <li><a className="dropdown-item" href="http://localhost:3000/">Start run</a></li>
            <li><a className="dropdown-item" href="http://localhost:3000/">Fail run</a></li>
            <li><a className="dropdown-item" href="http://localhost:3000/">Rerun batch</a></li>
            <li><a className="dropdown-item" href="http://localhost:3000/">Re-extract</a></li>
            <li><hr className='dropdown-divider' /></li>
            <li><a className="dropdown-item" href="http://localhost:3000/">Batch information</a></li> 
          </ul>
        </div>
        <p className='card-title'>Batch ID: test</p>
      </div>
      <div className='card-body'>
        <p className="card-subtitle mb-2 text-muted">Status: <i>Test</i></p>
        <div className="progress">
          <ProgressBar timeLeft={0} />              
        </div>
      </div>
    </div>)
      }
    </div>
  )
}

export default DataCard