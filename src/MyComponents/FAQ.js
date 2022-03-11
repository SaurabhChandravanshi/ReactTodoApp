import React from 'react';
import FAQItem from './FAQItem';

export default function FAQ(props) {
  return (
    <div className='container my-5'>
      <h2 className='text-dark my-5'>FAQs</h2>
      <div class="accordion" id="accordionExample">
        {
          props.faqs.map((e) => {
            return <FAQItem faq={e} key={e.sn}/>
          })
        }
      </div>
    </div>
  );
}
