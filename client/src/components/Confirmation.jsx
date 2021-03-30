/**
 * Confirmation component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

/**
 * Returns text that slack url was successfully added, if it is added.
 */
 const Confirmation = (props) => {
    // TODO: also return a text if webhook already exists
    if (props.message === false) {
        return(
            <div>
                
            </div>
        )
    } else {
        return (
           <div>
               <h4 style={{color: '#7FFF00', fontWeight: 'lighter'}}>URL successfully added!</h4>
           </div>
       )
    }
}

// Exports
export default Confirmation