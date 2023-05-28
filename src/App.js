import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";

function App() {
  return (
    <BrowserRouter className="h-full">
      <Layout className="h-full">
        <Routes className="h-full">
          <Route className="h-full" path="/" element={<LandingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
