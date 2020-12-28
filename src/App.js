import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import 'materialize-css'
import Navbar from './components/Navbar'
import { useRoutes } from './components/routes'
import { useAuth } from './components/auth.hook'
import { AuhtContext } from './context/AuhtContext'

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)
  return (
    <AuhtContext.Provider value={{
      token, login, logout, userId, isAuth
    }}>
      <Router>
        <div className="App">
          <Navbar />
          {routes}
        </div>
      </Router>
    </AuhtContext.Provider>
  )
}

export default App;
