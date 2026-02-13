import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
    return(
        <div>
            <p className={'text-green-500'}>Root Nav</p>
            {children}
            <p className={'text-green-500'}>Root Footer</p>
        </div>
    )
}

export default Layout;