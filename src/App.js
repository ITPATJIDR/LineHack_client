import react from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CampPage from './components/campPage';
import BananaPointPage from './components/bananaPointPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CampPage/>}/>
        <Route path="bananaPoint" element={<BananaPointPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
