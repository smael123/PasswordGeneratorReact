import React from 'react';
import { Toast } from 'react-bootstrap';

const ReusableToast = props => (
    <Toast 
        style={{display : props.toastVisible ? 'block' : 'none' }}
        show={props.toastVisible}
        onClose={props.onToastClose}>
        <Toast.Header>
            <strong className="mr-auto">
                {props.toastHeaderText}
            </strong>
        </Toast.Header>
        <Toast.Body>{props.toastBodyText}</Toast.Body>
    </Toast>
)

export default ReusableToast;