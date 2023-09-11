import React, { Children } from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 lg:w-9/12 mx-auto px-4'>
            {children}
        </div>
    );
};

export default Container;