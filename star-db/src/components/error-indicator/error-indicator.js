import React from 'react'

const ErrorIndicator = () => {
    return(
        <div className='error-indicator'>
            <span className='boom'>BOOM!</span>
            <span>Something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    )
};
export default ErrorIndicator;
