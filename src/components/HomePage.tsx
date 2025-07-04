import React from 'react';
import { ArrowRight, BookOpen, TrendingUp, DollarSign, Users, Star, CheckCircle } from 'lucide-react';
import { Formation } from '../types';
import { testimonials } from '../data/testimonials';

interface HomePageProps {
  formations: Formation[];
  onFormationClick: (formationId: string) => void;
  onGetStarted: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ formations, onFormationClick, onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transformez votre vie financière avec
              <span className="text-amber-400"> LFP Academy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Apprenez le trading, l'investissement et la gestion financière selon les principes bibliques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                    href={`https://wa.me/212674942504?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé(e) par la LFP Academy et je voudrais avoir plus d'information.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors transform hover:scale-105 duration-200"
                >
                Commencer maintenant
                </a>
              <button
                onClick={() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Voir les formations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Étudiants formés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">3</div>
              <div className="text-gray-600">Formations disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Formations */}
      <section id="formations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos formations populaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos programmes de formation conçus pour vous aider à atteindre vos objectifs financiers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <div
                key={formation.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => onFormationClick(formation.id)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {formation.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{formation.title}</h3>
                  <p className="text-gray-600 mb-4">{formation.shortDescription}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {formation.modules} modules
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {formation.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-900">
                      ${formation.price}
                    </div>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors">
                      Voir détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de ceux qui ont transformé leur vie financière
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="mt-4 text-sm text-blue-900 font-medium">
                  Formation: {testimonial.formation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir LFP Academy ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Formation complète</h3>
              <p className="text-gray-600">
                Des programmes structurés couvrant tous les aspects essentiels
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Communauté active</h3>
              <p className="text-gray-600">
                Rejoignez une communauté de chrétiens passionnés par la finance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Approche biblique</h3>
              <p className="text-gray-600">
                Apprenez selon les principes bibliques de l'intendance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre vie financière ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'étudiants qui ont déjà commencé leur parcours vers la liberté financière
          </p>
          <a
                    href={`https://wa.me/212674942504?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé(e) par vos services et je souhaite rejoindre la LFP Academy.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors transform hover:scale-105 duration-200"
                >
                Commencer votre parcours
                </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;