import React, {useState} from "react"
import Counter from './Counter'
import Albums from './Albums'
import Users from './Users'





function App() {
  const [page, setPage] = useState()

  const handleChangePage = (e) => {
    const page = e.target.innerText
    setPage(page)
  }

  const pages = {
    'Albums': Albums,
    'Counter': Counter,
    'Users': Users

  }

  const Page = pages[page] || Counter

  // const arrayPages = Object.keys(pages)

  return (
    <>

      {/* {
        Object.keys(pages).map(item =>{
          return <button onClick={handleChangePage}>{item}</button>
        })
      } */}
     
      <button onClick={handleChangePage}>Albums</button>
      <button onClick={handleChangePage}>Counter</button>
      <button onClick={handleChangePage}>Users</button>


      <Page />
    </>
  )
}

export default App;
