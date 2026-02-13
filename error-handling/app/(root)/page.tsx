import React from 'react'

import Hello from '@/components/Hello'

const Home = () => {
  console.log('Hello from server');
  return (
      <main>
          <Hello />
          <div>
              Welcome to error handling.
          </div>
      </main>
  )
}

export default Home;