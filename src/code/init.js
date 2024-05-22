import objetConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialiser l'application Firebase avec la configuration
export const appli = initializeApp(objetConfig);

// Initialiser Firestore
export const bd = getFirestore(appli);

// Raccourci pour la collection utilisée
export const collEx6Memo = "ex6-memo";
