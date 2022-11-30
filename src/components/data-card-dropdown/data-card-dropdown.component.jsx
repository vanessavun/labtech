import React, { useContext } from 'react'
import { KanbanContext } from '../../context/KanbanContext'

function DataCardDropdown({ data }) {
    const { updateFirebaseBatch } = useContext(KanbanContext);

    return (
        <>
            <button type="button" className="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false" >
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button
                        className="dropdown-item"
                        onClick={() => console.log("Start timer")}
                        disabled>
                        Start run
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={() => updateFirebaseBatch(data)}>
                        {data.test !== 'sequencing' ? "Proceed next step" : "Remove"}
                    </button>
                </li>
                {/* Disabled functionality for now */}
                <li><hr className='dropdown-divider' /></li>
                <li><button className="dropdown-item" onClick={() => console.log("FAIL")} disabled>Fail run</button></li>
                <li><button className="dropdown-item" onClick={() => console.log("RERUN")} disabled>Rerun batch</button></li>
                <li><button className="dropdown-item" onClick={() => console.log("RE-EXTRACT")} disabled>Re-extract</button></li>
                <li><hr className='dropdown-divider' /></li>
                <li><button className="dropdown-item" onClick={() => console.log("BATCH INFO")} disabled>Batch information</button></li>
            </ul>
        </>
    )
}

export default DataCardDropdown