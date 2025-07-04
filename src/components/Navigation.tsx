import React, { useState } from 'react';
import { Menu, X, GraduationCap, User, LogOut } from 'lucide-react';

interface NavigationProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isAuthenticated,
  onLogin,
  onLogout,
  currentPage,
  onPageChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'formations', label: 'Formations' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onPageChange('home')}>
            <GraduationCap className="h-8 w-8 text-blue-900" />
            <span className="ml-2 text-xl font-bold text-blue-900">LFP Academy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id ? 'text-blue-900 border-b-2 border-blue-900' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => onPageChange('dashboard')}
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Tableau de bord
                </button>
                <button
                  onClick={onLogout}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <button
                onClick={onLogin}
                className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition-colors font-medium"
              >
                Se connecter
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gray-200 pt-4">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        onPageChange('dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                    >
                      Tableau de bord
                    </button>
                    <button
                      onClick={onLogout}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                    >
                      Se déconnecter
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onLogin}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-amber-500 text-white hover:bg-amber-600"
                  >
                    Se connecter
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;