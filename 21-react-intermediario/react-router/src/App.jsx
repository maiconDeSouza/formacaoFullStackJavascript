import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


import  Users  from "./pages/Users"
import  Home  from "./pages/Home"

function App() {
  return (
    
    <Router>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/users">Usuários</Link>
          </li>
      </ul>
        <Switch>
            <Route path="/users" component={Users}>
                <Users />
            </Route>

            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  )
}

export default App
