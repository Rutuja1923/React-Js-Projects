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

createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    <App />
    <MyApp/>
  </StrictMode>,
)
