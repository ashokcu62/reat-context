
import './App.css';
import One from './components/One';
import { AppContext } from './AppContext';
import { useState } from 'react';
function App() {
const [state,setState]=useState("its ashok")  //  1 :state 
const [message, setMessage]=useState("got any messages")

  return (
    <div className="App">
     <AppContext.Provider value={{state,setState ,message}}>  {/* 2 : making state global  */}
      <One></One>
     </AppContext.Provider>
    </div>
  );
}

export default App;
