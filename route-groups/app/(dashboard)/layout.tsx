import React from 'react';

const Layout = ({ children } : { children : React.ReactNode }) => {
    return (
        <div>
            <p className={'text-blue-700'}>Dashboard Nav</p>
            {children}
            <p className={'text-blue-700'}>Dashboard Footer</p>
        </div>
    )
}

export default Layout;