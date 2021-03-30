/**
 * Component to return saved issues from database.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

/**
* Returns all the issues that the user has gotten through webhooks,
* when the user was not logged in.
*/
 const Database = (props) => { 
    if (props.message.data) {
        return ( 
            <div>
                <hr style={{background: '#fff'}} />
                <h3 style={{color: '#7FFF00', fontWeight: 'lighter'}}>New issue(s) since last time:</h3>
                {props.message.data.map((issue, i) => (
                    <div className='notification-box'>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Project: {issue.project}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Issue: {issue.title}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Action: {issue.action}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Description: {issue.description}</h4>
                    </div>
                ))}
            </div>
        )
    } else {
        return (<h3> </h3>)
    }
}

// Exports
export default Database