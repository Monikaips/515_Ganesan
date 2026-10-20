import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import TheMan from './pages/TheMan/TheMan.jsx';
import The515 from './pages/The515/The515.jsx';
import Journey from './pages/Journey/Journey.jsx';
import Service from './pages/Service/Service.jsx';
import DisasterRelief from './pages/DisasterRelief/DisasterRelief.jsx';
import Awards from './pages/Awards/Awards.jsx';
import Archive from './pages/Archive/Archive.jsx';
import HisVoice from './pages/HisVoice/HisVoice.jsx';
import Family from './pages/Family/Family.jsx';
import Contact from './pages/Contact.jsx';
import Legacy from './pages/Legacy/Legacy.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/the-man" element={<TheMan />} />
        <Route path="/the-515" element={<The515 />} />
        <Route path="/515" element={<Navigate to="/the-515" replace />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/service" element={<Service />} />
        <Route path="/disaster-relief" element={<DisasterRelief />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/recognition" element={<Navigate to="/awards" replace />} />
        <Route path="/his-voice" element={<HisVoice />} />
        <Route path="/family" element={<Family />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/biography" element={<Navigate to="/the-man" replace />} />
        <Route path="/milestones" element={<Navigate to="/journey" replace />} />
        <Route path="/achievements" element={<Navigate to="/awards" replace />} />
        <Route path="/gallery" element={<Navigate to="/archive" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
