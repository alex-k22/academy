import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "components/Shared/Layout";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";
import MediaPage from "./pages/MediaPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/media" element={<MediaPage />} />        
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contacts" element={<ContactsPage />} />        
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Route>
    </Routes>
    
  );
}

export default App
