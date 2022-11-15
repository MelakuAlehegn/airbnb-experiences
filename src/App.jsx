import './App.css'
import Navabar from './components/Navabar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map(card=>{
    return(
      <Card 
      key={card.id}
      item= {card}
      />
    )
  })
  return (
    <div className="App">
    <Navabar />
    <Hero />
    <div className= "card">
     {cards}
     </div>
    </div>
  )
}

export default App
