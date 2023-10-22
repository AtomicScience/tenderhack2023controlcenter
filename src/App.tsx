import { Route, Routes } from "react-router-dom"
import { ErrorsPage } from "./components/Errors"
import { Frame } from "./components/Frame"
import { DasboardPage } from "./components/DashboardPage"
import { DemoPage } from "./components/DemoPage"
import { ErrorKindPage } from "./components/ErrorKindPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frame />}>
        <Route path="/" element={<DasboardPage />} />
        <Route path="errors/:errorId" element={<ErrorKindPage />} />
        <Route path="errors" element={<ErrorsPage />} />
      </Route>
      <Route path="demo" element={<DemoPage />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>     
  )
}

export default App
