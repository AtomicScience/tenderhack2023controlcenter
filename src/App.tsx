import { Route, Routes } from "react-router-dom"
import { IncidentsPage } from "./components/IncidentsPage"
import { Frame } from "./components/Frame"
import { DasboardPage } from "./components/DashboardPage"
import { DemoPage } from "./components/DemoPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frame />}>
        <Route path="/" element={<DasboardPage />} />
        <Route path="errors" element={<IncidentsPage />} />
      </Route>
      <Route path="demo" element={<DemoPage />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>     
  )
}

export default App
