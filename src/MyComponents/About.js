import React from 'react';

export default function About() {
    return (
        <>
            <div className='container my-5'>
                <h2 className='text-dark my-5'>About Dev</h2>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TODO Awesome</h5>
                                <p className="card-text">This app was built by using ReactJS lib. by Saurabh. This app helps make and manages TODOs for daily routine. If you want to connect with me please use below LinkedIn & Github link.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">ReactJS.</li>
                                <li className="list-group-item">Bootstrap.</li>
                                <li className="list-group-item">JavaScript.</li>
                            </ul>
                            <div className="card-body">
                                <a href="https://linkedin.com/in/SaurabhChandravanshi" target='_blank' className="card-link">My LinkedIn</a>
                                <a href="https://github.com/SaurabhChandravanshi" target='_blank' className="card-link">My Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
