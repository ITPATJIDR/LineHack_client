import react from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import BananaPointPage from './pages/bananaPointPage';
import Service from './pages/servicePage';
import SelectCamp from "./pages/SelectCampPage"
import CampLoctionPage from './pages/CampLoctionPage';
import SelectService from "./pages/SelectServicePage"
import PaymentPage from './pages/PaymentPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/bananaPoint" element={<BananaPointPage/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/selectCamp" element={<SelectCamp/>}/>
        <Route path="/selectService" element={<SelectService/>}/>
        <Route path="/campLocation" element={<CampLoctionPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/paymentSuccess" element={<PaymentSuccessPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
