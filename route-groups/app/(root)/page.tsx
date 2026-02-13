import React from 'react'

import Hello from '@/components/Hello'
import {Route} from "next";

const Home = () => {
  console.log('Hello from server')
  return (
      <main>
          <Hello/>
          <div>
              Welcome to Route Groups.
          </div>
      </main>
  )
}

export default Home