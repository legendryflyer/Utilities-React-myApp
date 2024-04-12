import React from 'react'

function Alert(props) {

    const Capitalize= (word)=>{
        const lower = word.toLowerCase()
        return  lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return(

    props.alertMassage && <div className={`alert alert-${props.alertMassage.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alertMassage.type)}</strong>{props.alertMassage.massage}
  
    </div>
    )


}


export default Alert