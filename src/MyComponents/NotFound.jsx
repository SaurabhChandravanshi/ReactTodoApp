import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <div className="page-wrap d-flex flex-row align-items-center my-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">The page you are looking for was not found.</div>
                            <Link to='/'> <button type="button" class="btn btn-outline-primary">Take me to the Home Page</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
