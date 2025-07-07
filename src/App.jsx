import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "components/Shared/Layout";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";
import NewsPage from "./pages/NewsPage";
import VideoPage from "./pages/VideoPage";
import GamesPage from "./pages/GamesPage";
import NewsDetailPage from "./pages/NewsDetailPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/games" element={<GamesPage />} />       
        <Route path="/news" element={<NewsPage />} />  
        <Route path="/news/:id" element={<NewsDetailPage />} />      
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contacts" element={<ContactsPage />} />        
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Route>
    </Routes>
    
  );
}

export default App
