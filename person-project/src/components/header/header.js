import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="nav justify-content-md-center _color_bg_dark">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to={`/person`} className="nav-link _color_text_white">Persona</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
