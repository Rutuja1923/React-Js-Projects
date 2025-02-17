import {useState} from 'react'

function ToggleButton() {

    const [toggleText, setToggleText] = useState('On');

    const toggle = () => {
         
        setToggleText( (prevText) => 
           (prevText === 'On' ? 'Off' : 'On')  
        );
    }

  return (
    <div>
        <button onClick={toggle}>{toggleText}</button>
    </div>
  )
}

export default ToggleButton