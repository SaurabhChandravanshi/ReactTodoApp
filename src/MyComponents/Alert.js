import React from 'react';

export default function Alert(props) {
    return (
        <div className='container my-3'>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.type} : </strong> {props.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}
