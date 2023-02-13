import react from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import BananaPointPage from './pages/bananaPointPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="bananaPoint" element={<BananaPointPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
