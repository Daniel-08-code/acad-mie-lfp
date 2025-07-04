import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import FormationPage from './components/FormationPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DashboardPage from './components/DashboardPage';
import AuthModal from './components/AuthModal';
import { formations } from './data/formations';
import { User } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedFormationId, setSelectedFormationId] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Mock user data for demonstration
  const mockUser: User = {
    id: '1',
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    enrolledFormations: ['forex-mastery', 'personal-finance'],
    progress: {
      'forex-mastery': 45,
      'personal-finance': 100
    },
    joinedAt: new Date('2024-01-15')
  };

  const handleLogin = (email: string, password: string) => {
    // Mock authentication
    console.log('Login:', { email, password });
    setUser(mockUser);
    setIsAuthModalOpen(false);
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // Mock signup
    console.log('Signup:', { name, email, password });
    setUser({
      id: '2',
      name,
      email,
      enrolledFormations: [],
      progress: {},
      joinedAt: new Date()
    });
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleFormationClick = (formationId: string) => {
    setSelectedFormationId(formationId);
    setCurrentPage('formation');
  };

  const handleFormationEnroll = (formationId: string) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    
    // Mock enrollment
    setUser({
      ...user,
      enrolledFormations: [...user.enrolledFormations, formationId],
      progress: {
        ...user.progress,
        [formationId]: 0
      }
    });
    
    alert('Inscription réussie ! Vous avez maintenant accès à cette formation.');
  };

  const handleContinueFormation = (formationId: string) => {
    setSelectedFormationId(formationId);
    setCurrentPage('formation');
  };

  const handleGetStarted = () => {
    if (user) {
      setCurrentPage('dashboard');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedFormationId(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            formations={formations}
            onFormationClick={handleFormationClick}
            onGetStarted={handleGetStarted}
          />
        );
      case 'formation':
        if (!selectedFormationId) return null;
        const formation = formations.find(f => f.id === selectedFormationId);
        if (!formation) return null;
        return (
          <FormationPage
            formation={formation}
            onBack={() => setCurrentPage('home')}
            onEnroll={handleFormationEnroll}
            isEnrolled={user?.enrolledFormations.includes(formation.id) || false}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'dashboard':
        if (!user) {
          setIsAuthModalOpen(true);
          setCurrentPage('home');
          return null;
        }
        return (
          <DashboardPage
            user={user}
            formations={formations}
            onContinueFormation={handleContinueFormation}
          />
        );
      default:
        return (
          <HomePage
            formations={formations}
            onFormationClick={handleFormationClick}
            onGetStarted={handleGetStarted}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        isAuthenticated={!!user}
        onLogin={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
      {renderCurrentPage()}
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </div>
  );
}

export default App;