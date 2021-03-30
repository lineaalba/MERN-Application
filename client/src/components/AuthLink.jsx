/**
 * Component to render login or logout link.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

/**
 * Gets props from Authentication component to determine if AuthLink should return login
 * or logout link.
 */
const AuthLink = (props) => {
    if (!props.message) {
        return (
          <div style={{marginTop: '2rem'}}>
            <a href='http://localhost:8080/auth/gitlab' className='link'>Log in with GitLab</a>
          </div>
        )
    } else {
        return (
          <div>
            <h3>Please confirm logout</h3>
            <a href='http://localhost:8080/logout' className='link' >Log out</a>
          </div>
        )
    }
}

// Exports
export default AuthLink


