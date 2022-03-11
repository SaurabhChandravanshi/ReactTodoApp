import React from 'react';

export default function FAQItem(props) {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse-' + props.faq.sn} aria-expanded="false" aria-controls={'collapse-' + props.faq.sn}>
                        {props.faq.question}
                    </button>
                </h2>
                <div id={'collapse-' + props.faq.sn} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.faq.answer}
                    </div>
                </div>
            </div>
        </>
    );
}
