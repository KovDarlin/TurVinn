// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import ExcursionsList from './pages/Excursions/ExcursionsList';
import ExcursionDetail from './pages/Excursions/ExcursionDetail';
import Profile from './pages/Profile/Profile';
import Login from './pages/Profile/Login';
import Register from './pages/Profile/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import PirogovMuseum from './pages/Excursions/PirogovMuseum';
import FountainTour from './pages/Excursions/FountainTour';
import OzeroVush from './pages/Excursions/OzeroVush';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/excursions/fountain" element={<FountainTour />} />
          <Route path="/excursions/pirogov" element={<PirogovMuseum />} />
          <Route path="/excursions/ozero" element={<OzeroVush />} />
          <Route path="/excursions" element={<ExcursionsList />} />
          <Route path="/excursions/:route" element={<ExcursionDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
