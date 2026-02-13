import React from 'react'

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <p className={'text-orange-500'}>Dashboard Nav</p>
            {children}
        </div>
    )
}

export default Layout;