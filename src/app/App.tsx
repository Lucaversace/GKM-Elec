import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './Home';
import { MentionsLegales } from './pages/MentionsLegales';
import { PolitiqueConfidentialite } from './pages/PolitiqueConfidentialite';

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  companyName: 'GKM Elec',
  profession: 'Électricité & Télécommunications',
  city: 'Saint-Étienne et Lyon',
  phone: '06 26 80 80 98',
  email: 'contact@gkm-elec.fr',
};

type ClientType = 'particuliers' | 'professionnels';

function App() {
  const [clientType, setClientType] = useState<ClientType>('particuliers');

  return (
    <Router>
      <div className="min-h-screen">
        <Header
          profession={CONFIG.profession}
          phone={CONFIG.phone}
          companyName={CONFIG.companyName}
          clientType={clientType}
          setClientType={setClientType}
        />

        <Routes>
          <Route path="/" element={<Home clientType={clientType} />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>

        <Footer
          profession={CONFIG.profession}
          city={CONFIG.city}
          phone={CONFIG.phone}
          email={CONFIG.email}
        />
      </div>
    </Router>
  );
}

export default App;