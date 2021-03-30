/**
 * The Dashboard component.
 *
 * @author Filippa Jakobsson
 * @version 1.0
 */
 import React, { Component } from 'react'
 import Groups from './Groups'
 
 /**
 * The dashboard that renders groups if the user is logged in.
 */
 export default class Dashboard extends Component {
     constructor() {
         super()
         this.state = { data: [] }
     }
 
     /**
      * Fetching groups if the user is authenticated
      */
     componentDidMount() {
         fetch('/groups', {
             method: 'GET',
             credentials: 'include',
             headers: {
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Credentials': true,
             }
         })
         .then(res => res.json())
         .then(json => this.setState({ data: json }))
     }
 
     render() {   
         return (
             <div>
                 <Groups message={this.state.data} />
             </div>
         )
     }
 }
 