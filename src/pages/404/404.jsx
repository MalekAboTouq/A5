import React from 'react';
import '../404/404.css'
const NotFoundPage = () => {
  return (
    
    <div>
      <h1>Opps! Page not found</h1>
      <div className="link-container">
        <a
        //   target="_blank"
          href="/"
          
          className="more-link"
        >
          Home Page
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;