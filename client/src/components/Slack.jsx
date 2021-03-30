/**
 * The Slack component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 import React, { Component } from 'react'
 import Confirmation from './Confirmation'
 
 /**
 * Renders a input field for the user to fill in with Slack webhook url to get notifications to Slack
 */
 export default class Slack extends Component {
    constructor() {
        super()
        this.state = { webhook: '', input: '', added: false }
    }
     
    /**
    * Set input value to state
    */
    handleChange = (e) => {
        e.preventDefault()
        this.setState({...this.state.input, input: e.target.value})
    }

    /**
    * Posts input value and project id and sets state added to true to get confirmation message
    */
    async onSubmit(e) {
        e.preventDefault()
        // TODO: Blacklist possible harmful signs
            await fetch('/slack', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify({ url: this.state.input, id: this.props.id }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true,
                    }
            })
            .then(res => res.json())
            .then(this.setState({ added: true }))
            // TODO: Remove form when user has clicked send
    }
 
     render() { 
        if (this.props.message === '') {
            return(
                <div>
                    
                </div>
            )
        } else {
            // TODO: should be able to choose not to get slack notifications
            return (
                <div>
                    <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Add Slack webhook url to get issue notifications</h4>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <input className='inputField' type='text' name='url' placeholder='Paste url here..' onChange={(e) => this.handleChange(e)}/><br/>
                        <button className='saveButton'>Save</button>
                    </form>
                    <div>
                        <Confirmation message={this.state.added} />
                    </div>
                </div>
            )
        }
     }
 }