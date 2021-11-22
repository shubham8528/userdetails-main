/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react"
import { NavLink } from "react-router-dom"


const Navbaar = () => {



    let [change, setchange] = useState('HOME')
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid" >
                    <NavLink activeClassName='activeclass' className="navbar-brand" style={{ border: '2px solid white ', position: 'relative', padding: '5px 10px', background: 'rgb(71, 189, 195)', color: 'white' }} to="#">{change}</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName='menu-active' className="nav-link " onClick={() => {
                                    let a = 'HOME'
                                    setchange(a)
                                }} aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='menu-active'
                                    onClick={() => {
                                        let a = 'SERVICES'
                                        setchange(a)
                                    }}
                                    className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='menu-active'
                                    onClick={() => {
                                        let a = 'CONTACT'
                                        setchange(a)
                                    }}

                                    className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='menu-active'
                                    onClick={() => {
                                        let a = 'USERS-DETAILS'
                                        setchange(a)
                                    }}
                                    className="nav-link" to="/constumerdetails">Details</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link " to="/"><span style={{ color: 'red', fontWeight: 500 }}>Logout</span></NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbaar