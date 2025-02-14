import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {  //Fast refresh only works when a file has exports. Move your component(s) to a separate file.
  return (
    <>
    <p>Hey there ! i am a MyApp()</p>
    <p>I can still be used!</p>
    </>
  );
}

const anotherReactElement = (
  <a href='https://www.google.com/' target='_blank'>Visit Google!</a>
)

createRoot(document.getElementById('root'))
.render(
  anotherReactElement
)
