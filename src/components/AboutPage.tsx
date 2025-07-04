import React from 'react';
import { Award, BookOpen, Users, Heart, Target, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de LFP Academy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Transformez votre vie financière selon les principes bibliques
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 mr-3 text-blue-900" />
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Enseigner aux chrétiens francophones les principes bibliques de l'intendance financière, 
                en leur donnant les outils nécessaires pour prospérer tout en honorant Dieu avec leurs finances.
              </p>
              <p className="text-gray-600">
                Nous croyons que chaque chrétien peut apprendre à gérer ses finances avec sagesse, 
                à investir intelligemment et à créer de la richesse de manière éthique.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 mr-3 text-blue-900" />
                Notre Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Voir une génération de chrétiens financièrement libres, capables d'impacter 
                positivement leur famille, leur communauté et l'œuvre de Dieu.
              </p>
              <p className="text-gray-600">
                Nous aspirons à devenir la référence en matière d'éducation financière biblique 
                dans l'espace francophone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rencontrez le fondateur
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/ceo.png"
                alt="Daniel K. ANONWODJI"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Daniel K. ANONWODJI
              </h3>
              <p className="text-lg text-blue-900 mb-6">
                Fondateur & Formateur Principal
              </p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Daniel K. ANONWODJI est un expert reconnu en finance et investissement, 
                  passionné par l'enseignement des principes bibliques de l'intendance financière.
                </p>
                
                <p>
                  Avec plus de 10 ans d'expérience dans les marchés financiers et une formation 
                  solide en théologie, il allie expertise technique et sagesse spirituelle pour 
                  former la prochaine génération d'investisseurs chrétiens.
                </p>
                
                <p>
                  Sa mission est de démontrer que foi et prospérité financière peuvent aller 
                  de pair, à condition d'appliquer les principes bibliques avec discipline et sagesse.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">500+</div>
                  <div className="text-sm text-gray-600">Étudiants formés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">10+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre enseignement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intégrité</h3>
              <p className="text-gray-600">
                Nous enseignons l'éthique financière selon les principes bibliques, 
                privilégiant l'honnêteté dans tous nos enseignements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir un enseignement de qualité supérieure, 
                basé sur des stratégies éprouvées et des résultats concrets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Communauté</h3>
              <p className="text-gray-600">
                Nous créons un environnement d'apprentissage collaboratif où chacun 
                peut grandir et s'épanouir selon ses dons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer votre transformation financière ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté et découvrez comment appliquer les principes bibliques 
            à votre vie financière.
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors">
            Voir nos formations
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;