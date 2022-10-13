import React, {useContext} from 'react'
import { KanbanContext } from '../../context/KanbanContext'

function DataCardDropdown({data}) {
    console.log("Datacard dropdown data:", data)
    const {moveToNextTest} = useContext(KanbanContext);

    return (
        <>
            <button type="button" className="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false" >
            </button>
            <ul className="dropdown-menu">
            <li>
                <button 
                className="dropdown-item" 
                onClick={()=>console.log("START")}>
                Start run
                </button>
            </li>
            <li>
                <button 
                    className="dropdown-item" 
                    onClick={()=>moveToNextTest(data)}>
                    {data.test !== 'sequencing' ? "Proceed next step" : "Remove"}
                </button>
            </li>
            {/* Future functions:
            <li><hr className='dropdown-divider' /></li>
            <li><button className="dropdown-item" onClick={()=>console.log("FAIL")}>Fail run</button></li>
            <li><button className="dropdown-item" onClick={()=>console.log("RERUN")}>Rerun batch</button></li>
            <li><button className="dropdown-item" onClick={()=>console.log("RE-EXTRACT")}>Re-extract</button></li>
            <li><hr className='dropdown-divider' /></li>
            <li><button className="dropdown-item" onClick={()=>console.log("BATCH INFO")}>Batch information</button></li> 
            */}
            </ul>
        </>
  )
}

export default DataCardDropdown