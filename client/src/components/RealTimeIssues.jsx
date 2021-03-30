/**
 * The RealTimeIssues component.
 *
 * @author Filippa Jakobsson
 * @version 1.0
 */

import React, { Component } from 'react'
import io from 'socket.io-client'
import Issue from './Issue'

/**
 * Component to render real-time issues
 *
 */
export default class RealTimeIssues extends Component {
    constructor() {
        super()
        this.state = { data: [], isLoggedIn: false }
    }

    /**
    * Setting issue data from socket to state and 
    * fetching groups to determine if the user is authenticated
    */
    componentDidMount() {
        const socket = io('http://localhost:8080', {transports: ['websocket']})
        socket.on('issue', data => {
            this.setState({ data })
        })

        // trying to fetch groups to determine if the user is logged in
        // TODO: make more dry by adding a specific component that 
        // returns true if logged in
        fetch(`/groups`)
        .then(res => res.json())
        .then(json => {
            if (json) {
                this.setState({ isLoggedIn: true })
            }
        })
    }

    render() {       
        return (
        <Issue message={this.state.data} isLoggedIn={this.state.isLoggedIn} />
        )
    }
}
