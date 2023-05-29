import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import VideosPage from "./pages/VideosPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import GuidesPage from "./pages/GuidesPage";
import GuidePage from "./pages/GuidePage";
import ToursPage from "./pages/ToursPage";
import VideoPage from "./pages/VideoPage";
import TourPage from "./pages/TourPage";
import { tourData } from "./data/TourData";
import UploadPage from "./pages/UploadPage";
import Profile from "./components/common/Profile";


function App() {
  const userId = localStorage.getItem("user_id");
  const userEmail = localStorage.getItem("user_email");
  const isAuthenticated = userId && userEmail;
  return (
    <BrowserRouter className="h-full">
      <Layout className="h-full">
        <Routes className="h-full">
          <Route className="h-full" path="/" element={<LandingPage />} />
          <Route className="h-full" path="/videos" element={<VideosPage />} />
          <Route className="h-full" path="/signup" element={<SignupPage />} />
          <Route className="h-full" path="/login" element={<LoginPage />} />
          <Route className="h-full" path="/tours" element={<ToursPage />} />
          <Route className="h-full" path="/guides" element={<GuidesPage />} />
          <Route className="h-full" path="profile" element={<Profile />} />
          <Route
            className="h-full"
            path="/guides/guide"
            element={<GuidePage />}
          />
          <Route className="h-full" path="/tours/tour" element={<TourPage />} />
          <Route
            className="h-full"
            path="/uploadpage"
            element={<UploadPage />}
          />

          <Route
            className="h-full"
            path="/videos/video"
            element={<VideoPage />}
          />

          <Route
            path="/videos/video/tours/tour"
            element={<Navigate replace to="/tours/tour" />}
          />
          <Route
            path="/videos/uploadpage"
            element={<Navigate replace to="/uploadpage" />}
          />
          <Route
            path="/uploadpage/videos"
            element={<Navigate replace to="/videos" />}
          />
          <Route path="/login/redirect" element={<Navigate replace to="/" />} />
          <Route
            path="/signup/redirect"
            element={<Navigate replace to="/" />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
