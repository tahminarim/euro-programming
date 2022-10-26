import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='text-center bg-warning '>
        <div className=''>
          <div className=''>
            <h2 className='text-danger'>
              <span className=''>Error</span>404
            </h2>
            <p className='text-danger'>
              Couldn't find this page.
            </p>
            <Link to='/' className=''>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;
