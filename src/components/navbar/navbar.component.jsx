import React, { useContext } from 'react';
import './navbar.styles.css';
import { KanbanContext } from '../../context/KanbanContext';

function Navbar() {
    const {userLogin, handleLogin} = useContext(KanbanContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img src='https://cdn-icons-png.flaticon.com/512/1682/1682102.png' width="30" height="30" alt="Laboratory icon created by Freepik - Flaticon" />
                <a className="navbar-brand ps-1" href="https://verdant-lolly-f32bb9.netlify.app/">Biotech Lab</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://verdant-lolly-f32bb9.netlify.app/">Kanban Board</a>
                        </li>
                    </ul>
                    {userLogin ?
                        (<ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">Welcome, Vanessa!</li>
                            <li className='nav-item ps-2'><button className="btn btn-primary btn-sm" type="button" onClick={() => handleLogin()}>Log Out</button></li>
                        </ul>)
                        :
                        (<ul className="navbar-nav d-flex align-items-center">
                            <li className='nav-item ps-2'><button className="btn btn-primary btn-sm" type="button" onClick={() => handleLogin()}>Log In</button></li>
                        </ul>)
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;