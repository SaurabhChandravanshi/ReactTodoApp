import React from 'react';

export default function Footer() {
  const footerStyle = {
    position: 'relative',
    top: '30vh',
    width: '100%'
  };
  return (
    <div className='container-fluid footer-container p-0'>
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>Copyright &copy; TODO. All Right Reserved.</p>
    </footer>
    </div>
  );
}
