import react from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import BananaPointPage from './pages/bananaPointPage';
import Service from './pages/servicePage';
import SelectCamp from "./pages/SelectCampPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/bananaPoint" element={<BananaPointPage/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/selectCamp" element={<SelectCamp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
