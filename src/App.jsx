import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data/data'

const cardData = data.map(items => {
  return <Card 
    key={items.id}
    item={items}
  />
})
function App() {
  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cardData}
      </section>
    </div>
  )
}

export default App
