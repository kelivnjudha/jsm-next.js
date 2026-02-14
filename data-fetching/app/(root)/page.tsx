import React from 'react'

import Hello from '@/components/Hello'

const Home = async () => {

    type Country = {
        name?: {
            common?: string,
        }
    }
    const res = await fetch('https://restcountries.com/v3.1/currency/cop', {cache: "no-store"});
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const data: Country[] = await res.json();

    return(
        <main>
            <Hello />
            <div>
              Welcome to data Fetching Next JS.
            </div>
            <ul>

            </ul>
        </main>
    )
}

export default Home;