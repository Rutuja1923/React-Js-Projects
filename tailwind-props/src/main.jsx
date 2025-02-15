import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Catcard from '../components/Catcard.jsx'

let myObj = {
  age : 5,
  favorite : "sea fish"
}
let myArr = ['cat', 'purr', 'milk']

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Catcard name="Silky" someObj = {myObj} someArr = {myArr} />
  </StrictMode>,
)
