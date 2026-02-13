import React from 'react'

import Hello from './components/Hello'


const Home = () => {
  console.log('Hello from server')
  return (
      <main>
          <Hello />
          <div className={'text-lg'}>
            Welcome to Layout in NextJS.
          </div>
      </main>
  )
}

export default Home;