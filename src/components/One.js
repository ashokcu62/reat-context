import React,{useContext} from 'react'
import Two from './Two'
import { AppContext } from '../AppContext'
function One() {
  const {state,setState}=useContext(AppContext)
  return (
     
    <div style={{backgroundColor: "lightblue",width:'500px'}}>
      <input type="text"value={state} onChange={(e)=>{
        setState(e.target.value)
      }}  />
      <h1>one</h1>
      <Two/>
        
     
    </div>
  )
}

export default One
