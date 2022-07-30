import React,{useContext} from 'react'      /// usecontext import 1
import { AppContext } from '../AppContext'  // 2 : app con

function Three(props) {
    const{state,message}=useContext(AppContext)
  return (
    <div  style={{backgroundColor: "green",width:'300px'}}>
        <h3>three  :{state}    </h3><h3> {message}</h3>
      
    </div>
  ) 
}

export default Three
