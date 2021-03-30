/**
 * The Authentication component.
 *
 * @author Filippa Jakobsson
 * @version 1.0
 */

import React, { Component } from 'react'
import AuthLink from './AuthLink'

/**
* Returns the correct auth link depending on if the user is authenticated or not
*/
export default class Authentication extends Component {
    constructor() {
        super()
        this.state = { isLoggedIn: false }
    }

    /**
    * Fetching groups to determine if the user is authenticated
    */
    componentDidMount() {
        // trying to fetch groups to determine if the user is logged in
        // TODO: make more dry by adding a specific component that 
        // returns true if logged in
        fetch(`/groups`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials': true,
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json) {
                this.setState({ isLoggedIn: true })
            }
        })
    }

    render() {
        return(
            <AuthLink message={this.state.isLoggedIn} />
        )
    }
}