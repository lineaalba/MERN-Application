/**
 * The Navbar component.
 *
 * @author Filippa Jakobsson
 * @version 1.0
 */

import React from 'react'
import { MenuItemsLogin, MenuItemsLogout } from './MenuItems'
import './Navbar.css'

/**
 * Returns menu options depending on the props from IsLoggedIn component
 * that indicates if the user is logged in or logged out.
 *
 */
const Navbar = (props) => {
    if (props.message) {
        return (
            <nav className='navbarItems'>
                {MenuItemsLogout.map((item, index) => {
                    return (
                        <ul key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </ul>
                    )
                })}
            </nav>
        )
    } else {
        return (
            <nav className='navbarItems'>
                {MenuItemsLogin.map((item, index) => {
                    return (
                        <ul key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </ul>
                    )
                })}
            </nav>
        )
    }
}

// Exports
export default Navbar