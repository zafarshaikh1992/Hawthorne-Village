import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ServicePage from "@/pages/services/ServicePage";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}

export default App;
