import React from 'react';

import Hello from './components/Hello'

const Home = () => {
  return (
      <main>
          <Hello/>
          <div className={"text-2xl"}>
            Welcome to my first app!
          </div>
      </main>
  )
}

export default Home;