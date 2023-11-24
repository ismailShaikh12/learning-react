
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className=''> Hello Context </h1>
      <Login />
      <Profile />
    </UserContextProvider>  
  )
}

export default App
