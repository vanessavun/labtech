import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {/* eslint-disable-next-line */}
                <a className="navbar-brand" href="#">Biotech Laboratory</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">{/* eslint-disable-next-line */}
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">{/* eslint-disable-next-line */}
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">{/* eslint-disable-next-line */}
                                <li><a className="dropdown-item" href="#">Action</a></li>{/* eslint-disable-next-line */}
                                <li><a className="dropdown-item" href="#">Another action</a></li>{/* eslint-disable-next-line */}
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
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