import React from 'react';

function withWarning(WrappedComponent) {
    return function (props) {
        return (
        <div className='alert'>
            <span className='alert-symbol'>&#9888;</span>
            <WrappedComponent {...props} />

        </div>
        );
    };
}

export default withWarning;