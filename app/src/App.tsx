import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Layout from "./pages/Layout"
import MainPage from "./MainPage";
import Cardhref from "./Lista/cardhref"

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="list" element={<List />} />
          <Route path="filmek/:id" element={<Cardhref/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
