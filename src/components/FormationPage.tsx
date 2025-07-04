import React from 'react';
import { ArrowLeft, BookOpen, Clock, Users, CheckCircle, Play, Star, Target, Award } from 'lucide-react';
import { Formation } from '../types';

interface FormationPageProps {
  formation: Formation;
  onBack: () => void;
  onEnroll: (formationId: string) => void;
  isEnrolled: boolean;
}

const FormationPage: React.FC<FormationPageProps> = ({ formation, onBack, onEnroll, isEnrolled }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux formations
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {formation.level}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {formation.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {formation.description}
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-amber-400" />
                  <span>{formation.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-amber-400" />
                  <span>{formation.modules} modules</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-amber-400" />
                  <span>Accès à vie</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={formation.image}
                alt={formation.title}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2">
            {/* Objectives */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 mr-3 text-blue-900" />
                Objectifs de la formation
              </h2>
              <div className="space-y-4">
                {formation.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Program */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-blue-900" />
                Programme détaillé
              </h2>
              <div className="space-y-4">
                {formation.program.map((module, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{module}</h3>
                      <p className="text-sm text-gray-600">Module {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enrollment */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  ${formation.price}
                </div>
                <p className="text-gray-600">Accès à vie</p>
              </div>

              {isEnrolled ? (
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-4">
                    <CheckCircle className="h-5 w-5 inline mr-2" />
                    Vous êtes inscrit à cette formation
                  </div>
                  <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Continuer la formation
                  </button>
                </div>
              ) : (
                <a
                    href={`https://wa.me/212674942504?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé(e) par la formation "${formation.title}" de LFP Academy et je voudrais m'inscrire.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors transform hover:scale-105 duration-200"
                >
                S'inscrire maintenant
                </a>

              )}

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Accès immédiat</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Support 24/7</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Certificat inclus</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Garantie 30 jours</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9/5 (127 avis)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;