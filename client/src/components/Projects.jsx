/**
 * The projects component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

import React, { Component } from 'react'
import Webhook from './Webhook'
import Slack from './Slack'

/**
* Gets props from Groups component to render and return the correct projects
* Also returns the webhook component
*/
export default class Projects extends Component {
   constructor() {
       super()
       this.state = { webhook: '', id: '' }
   }

    /**
    * Adds a webhook if the user has clicked on a project, 
    * if the user has not already a webhook on that specific project
    */
   async addWebhook (id) {
    await fetch('/hook/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            id: id,
            'Access-Control-Allow-Credentials': true,
        }
    })

    .then(res => res.json())
    .then(json => this.setState({ webhook: json, id: id}))
}

    render() { 
        if (this.props.message.length > 0) {
            return (
                <div> 
                    <Webhook message={this.state.webhook}/>
                    <Slack message={this.state.webhook} id={this.state.id} />
                    <br />
                    <p>Click on a project to add a webhook</p>
                    {this.props.message.map((project, i) => (
                        <div>
                            <h4 key={i} onClick={() => this.addWebhook(project.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ project.name }</h4>                        
                        </div>
                    ))}
                    <p style={{color: '#fff'}}>______________________________</p>
                </div>
            )
        }  else {
            return (
                <div>
                    <h4 style={{color: 'tomato'}}>This group has no projects</h4>
                    <p style={{color: '#fff'}}>______________________________</p>
                </div>
            )
        }
    }
}