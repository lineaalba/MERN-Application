/**
 * Webhook component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

/**
 * Returns text that webhook was successfully added, if it is added.
 */
 const Webhook = (props) => {
     // TODO: also return a text if webhook already exists
     if (props.message === '') {
         return(
             <div>
                 
             </div>
         )
     } else {
         return (
            <div>
                <h4 style={{color: '#7FFF00', fontWeight: 'lighter'}}>Webhook successfully added!</h4>
            </div>
        )
     }
}

// Exports
export default Webhook