import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Layout from "./pages/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route path="list" element={ <List/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
