import { useState } from 'react'
import './App.css'
import Data from './data';
import Entry from './components/Entry';

function App() {

const entries = Data.map((entry) => {
 return (<Entry
          key={entry.id}
          img={entry.img}
          title={entry.title}
          country={entry.country}
          googleMapsLink={entry.googleMapsLink}
          dates={entry.dates}
          text={entry.text}
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
