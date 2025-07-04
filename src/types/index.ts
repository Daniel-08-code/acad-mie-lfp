export interface Formation {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: string;
  modules: number;
  image: string;
  objectives: string[];
  program: string[];
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: 'forex' | 'bourse' | 'finances';
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledFormations: string[];
  progress: Record<string, number>;
  joinedAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  formation: string;
}