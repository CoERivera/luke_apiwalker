import { Route, Routes, Navigate } from "react-router-dom"
import LukeAPIwalker from "./components/LukeAPIwalker"
import People from "./components/People"
import Films from "./components/Films"
import Planets from "./components/Planets"
import Species from "./components/Species"
import Starships from "./components/Starships"
import Vehicles from "./components/Vehicles"
import Error from "./components/Error"


function App() {
  return (
    <div className="container-sm mt-3">
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<LukeAPIwalker />} />
        <Route path="/people" element={<Navigate to="/" />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/films" element={<Navigate to="/" />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/planets" element={<Navigate to="/" />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/species" element={<Navigate to="/" />} />
        <Route path="/species/:id" element={<Species />} />
        <Route path="/starships" element={<Navigate to="/" />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="/vehicles" element={<Navigate to="/" />} />
        <Route path="/vehicles/:id" element={<Vehicles />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App