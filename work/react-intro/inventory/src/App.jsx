import { useState } from "react";
import Reorder from "./Reorder";
import './index.css'

// On the prompt in Console: unchecked runtime.lasterror: the message port closed before a response was received.
// Please disabled all installed extensions in browser to solve this prompt.

// If you find many files missing under the src and public folders.
// this is because I understood the meaning of the different files and then deleted the extra files. 
// Make sure its in build and normal mode with as few alarms as possible.

function App() {
  const [count, setCount] = useState(0);
  const [activeFlag, setActive] = useState(false);

  var activeButton =activeFlag ? 'active': '' ;

  function OnReorder() {
    setCount(5);
  }
  
  function handleClickAddition(){
    setCount(count+1);
    setActive(true);
  }
  
  function handleClickSubtraction(){
    setCount(count-1);
    setActive(true);
  }

  return (
    <section className="counter">
      <h1 className="counter__head">Inventory</h1>
      <h1 className="counter__display">{count}</h1>
      <button className={`button__addition ${activeButton}`} onClick={handleClickAddition} >+</button>
      
      <button className={`button__subtraction ${activeButton}`} onClick={handleClickSubtraction} disabled={!count}>-</button>
      {/* link from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */}
      { (count === 0) &&  Reorder(OnReorder) }
    </section>
  );
}

export default App;