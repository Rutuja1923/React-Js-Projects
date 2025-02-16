import './App.css'
import TeaDisplay from '../Components/TeaDisplay'
import StaticComponent from '../Components/staticComponent'

function App() {
  const newTea = {
    name : 'Chamomile tea',
    origin: 'Europe and the Mediterranean',
    desciption: 'The name chamomile comes from the Greek word “chamomaela” or “ground apple”. Chamomile is used to treat anxiety and settle stomachs.It is also used for its fragrance and flavor profile.'
  }

  return (
    <>
      <StaticComponent />
      <TeaDisplay name = {newTea.name} origin = {newTea.origin} description={newTea.desciption}/>
    </>
  )
}

export default App
