import React from 'react';
import { BookOpen, TrendingUp, Award, Clock, Play, CheckCircle, Star } from 'lucide-react';
import { User, Formation } from '../types';

interface DashboardPageProps {
  user: User;
  formations: Formation[];
  onContinueFormation: (formationId: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user, formations, onContinueFormation }) => {
  const enrolledFormations = formations.filter(f => user.enrolledFormations.includes(f.id));
  const completedFormations = enrolledFormations.filter(f => (user.progress[f.id] || 0) >= 100);
  const inProgressFormations = enrolledFormations.filter(f => (user.progress[f.id] || 0) < 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bienvenue, {user.name}
              </h1>
              <p className="text-gray-600 mt-1">
                Membre depuis {user.joinedAt.toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">{enrolledFormations.length}</div>
                <div className="text-sm text-gray-600">Formations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{completedFormations.length}</div>
                <div className="text-sm text-gray-600">Complétées</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Continue Learning */}
            {inProgressFormations.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Continuer l'apprentissage
                </h2>
                <div className="space-y-4">
                  {inProgressFormations.map((formation) => {
                    const progress = user.progress[formation.id] || 0;
                    return (
                      <div
                        key={formation.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img
                              src={formation.image}
                              alt={formation.title}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{formation.title}</h3>
                              <p className="text-sm text-gray-600">{formation.modules} modules</p>
                              <div className="flex items-center mt-2">
                                <div className="bg-gray-200 rounded-full h-2 w-32 mr-2">
                                  <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                  />
                                </div>
                                <span className="text-sm text-gray-600">{progress}%</span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => onContinueFormation(formation.id)}
                            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Continuer
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All Formations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mes formations
              </h2>
              {enrolledFormations.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Vous n'êtes inscrit à aucune formation pour le moment.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {enrolledFormations.map((formation) => {
                    const progress = user.progress[formation.id] || 0;
                    const isCompleted = progress >= 100;
                    
                    return (
                      <div
                        key={formation.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="relative">
                          <img
                            src={formation.image}
                            alt={formation.title}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          {isCompleted && (
                            <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-2">{formation.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{formation.modules} modules</p>
                        
                        <div className="flex items-center mb-4">
                          <div className="bg-gray-200 rounded-full h-2 flex-1 mr-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                isCompleted ? 'bg-green-500' : 'bg-blue-600'
                              }`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">{progress}%</span>
                        </div>
                        
                        <button
                          onClick={() => onContinueFormation(formation.id)}
                          className={`w-full px-4 py-2 rounded-lg transition-colors ${
                            isCompleted
                              ? 'bg-green-100 text-green-800 hover:bg-green-200'
                              : 'bg-blue-900 text-white hover:bg-blue-800'
                          }`}
                        >
                          {isCompleted ? 'Revoir' : 'Continuer'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Statistiques
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Formations</span>
                  </div>
                  <span className="font-semibold text-gray-900">{enrolledFormations.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Complétées</span>
                  </div>
                  <span className="font-semibold text-gray-900">{completedFormations.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">En cours</span>
                  </div>
                  <span className="font-semibold text-gray-900">{inProgressFormations.length}</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Récompenses
              </h3>
              <div className="space-y-3">
                {completedFormations.map((formation) => (
                  <div key={formation.id} className="flex items-center">
                    <Award className="h-5 w-5 text-amber-500 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {formation.title}
                      </div>
                      <div className="text-xs text-gray-500">Formation terminée</div>
                    </div>
                  </div>
                ))}
                {completedFormations.length === 0 && (
                  <p className="text-gray-500 text-sm">
                    Terminez une formation pour débloquer des récompenses !
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;