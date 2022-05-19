import { useState } from "react";

import { Counter } from "./Counter"
import { Albuns } from "./Albuns"
import { Users } from "./Users"




function App() {
 

  const [pages, setPages] = useState()

  const page = {
    contador: Counter,
    albuns: Albuns,
    usuarios: Users
  }


  const navClick = (e) =>{
     setPages(e.target.innerText)
    
  }

 

  const Pages = page[pages]
  
  return (
    <>
      {/* <Buttons onClick={navClick} value={prop}/> */}
      {
       Object.keys(page).map(el =>{
         return <button onClick={navClick} key={el}>{el}</button>
       })
      }
      {pages && <Pages />}
      
    </>
  )
}

export default App
