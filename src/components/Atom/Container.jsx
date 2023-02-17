import React from 'react';

const Container = ({ children, className }) => {
    return (
        <div className={`grid grid-cols-4 w-[90%] m-auto gap-x-4 gap-y-8 py-6 lg:grid-cols-12 lg:w-[50%] ${className}`}>
            {children}
        </div>
    );
};

export default Container;
