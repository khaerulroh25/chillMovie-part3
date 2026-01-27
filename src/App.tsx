import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./assets/pages/LoginPage";
import RegisterPage from "./assets/pages/RegisterPage";
import HomePage from "./assets/pages/HomePage";
import DaftarSaya from "./assets/pages/DaftarSaya";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/daftarsaya" element={<DaftarSaya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
