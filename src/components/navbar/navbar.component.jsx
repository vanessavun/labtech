import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img src='https://cdn-icons-png.flaticon.com/512/1682/1682102.png' width="30" height="30" alt="Biotech lab logo"/>
                {/* eslint-disable-next-line */}
                <a className="navbar-brand" href="#">Biotech Lab</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link active" aria-current="page" href="#">Schedule</a>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link active" aria-current="page" href="#">Accessioning</a>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link active" aria-current="page" href="#">Inventory</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;