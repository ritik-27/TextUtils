import React from 'react';

function Alert(props) {
    return ( //below written props.alert simply written because we were getting null value of alert and this this will reduce the error 
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>

    )
}

export default Alert;
