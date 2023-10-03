import {useState} from 'react'

function Arithmetic(){
   const [number1,setNumber1]= useState(0)
   const [number2,setNumber2]=useState(0);
  const [total,SetResult]=useState(0);
  function Addition(){
    SetResult(number1+number2)
  }
  function Sub(){
    SetResult(number1-number2)
  }
  function Multi(){
    SetResult(number1*number2)
  }
  function Divide()
  {
    SetResult(number1/number2)
  }
    return <div>
        <div>
            
        <h5>Doing the Arithmetic app</h5>
    <label>Enter 1st number :</label>
    <input type="text"  placeholder="First Number" value={number1}  onChange={(e)=>setNumber1(+e.target.value)}/>
    <br/>
    <label>Enter 2st number :</label>
    <input type="text"    placeholder="Second Number" value={number2}  onChange={(e)=>setNumber2(+e.target.value)}/>
    </div>
    <div><button onClick={Addition}>Add</button></div>
    <div><button onClick={Sub}>Subtract</button></div>
    <div><button onClick={Multi}>Multitply</button></div>
    <div><button onClick={Divide}>Division</button></div>
    <div id="result"><p>Result:{total}</p></div>

    </div>

}
export default Arithmetic