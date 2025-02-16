import { useState } from 'react'
import './App.css'
import Data from './data';
import Entry from './components/Entry';

function App() {

const entries = Data.map((entry) => {
 return (<Entry
          key={entry.id}
          {...entry}
        />
    )
})

  return (
    <>
      {entries}
    </>
  )
}

export default App
