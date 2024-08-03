import Header from "./components/header"
import Games from "./pages/games"
import Home from "./pages/home"
import Rewards from "./pages/rewards"
import SignIn from "./pages/signIn"
import Footer from "./components/footer"
import Settings from './pages/settings'; // Import the Settings component
import { Routes, Route, useLocation } from "react-router-dom"


function App() {
  const location = useLocation()
  const showHeader = location.pathname !== "/"
  

    return (
    <div className="bg-secondary-200">
      {showHeader && <Header/>}
      <div>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/rewards" element={<Rewards/>}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
