import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Nav = () => {
    return (
        <nav className='Nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav