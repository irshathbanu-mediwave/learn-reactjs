import {useState} from 'react'
import "./App.css"
function Arithmetic(){
   const [number1,setNumber1]= useState<number>(0)
   const [number2,setNumber2]=useState<number>(0);
  const [total,SetResult]=useState<number|null>(null);
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
    if(number2==0){
      alert("cannot divide by zero")
    }
    else{
    SetResult(number1/number2)
      
    }
  }
    return <div id="container">
        <div id="inputcontainer">
            
        <h5>Doing the Arithmetic Function</h5>
    <label>Enter 1st number :</label>
    <input type="text"  placeholder="First Number" value={number1}  onChange={(e)=>setNumber1(+e.target.value)}/>
    <br/>
    <label>Enter 2st number :</label>
    <input type="text"    placeholder="Second Number" value={number2}  onChange={(e)=>setNumber2(+e.target.value)}/>
    </div>
    <div id="buttonsection">
    <div><button onClick={Addition} id="Addbtn">Add</button></div>
    <div><button onClick={Sub} id="Addbtn">Subtract</button></div>
    <div><button onClick={Multi} id="Addbtn">Multitply</button></div>
    <div><button onClick={Divide} id="Addbtn">Division</button></div>
    </div>
    <div id="result">Result:{total}</div>
    
    </div>

}
export default Arithmetic