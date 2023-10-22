import { Route, Routes } from "react-router-dom"
import { ErrorsPage } from "./components/Errors"
import { Frame } from "./components/Frame"
import { DasboardPage } from "./components/DashboardPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frame />}>
        <Route path="/" element={<DasboardPage />} />
        <Route path="errors" element={<ErrorsPage />} />
      </Route>
      <Route path="*" element={<p>404</p>} />
    </Routes>     
  )
}

export default App
