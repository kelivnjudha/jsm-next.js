import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p className={'text-green-500'}>Root Nav</p>
            {children}
        </div>
    )
}

export default Layout;