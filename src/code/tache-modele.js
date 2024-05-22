import { bd, collEx6Memo } from "./init";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

/**
 * Ajoute une nouvelle tâche à la collection Firestore.
 * @param {Object} tache Objet représentant la tâche à ajouter.
 * @returns {Promise} Promesse contenant l'ID du document ajouté.
 */
export async function creer(tache) {
  const docRef = await addDoc(collection(bd, collEx6Memo), tache);
  return docRef.id;
}

/**
 * Récupère toutes les tâches de la collection Firestore, triées par date d'ajout.
 * @returns {Promise<Array>} Promesse contenant un tableau de toutes les tâches.
 */
export async function lireTout() {
  const querySnapshot = await getDocs(collection(bd, collEx6Memo));
  const taches = [];
  querySnapshot.forEach((doc) => {
    taches.push({ id: doc.id, ...doc.data() });
  });
  return taches;
}

/**
 * Supprime une tâche de la collection Firestore.
 * @param {string} idTache Identifiant de la tâche à supprimer.
 * @returns {Promise} Promesse indiquant la suppression.
 */
export async function supprimer(idTache) {
  await deleteDoc(doc(bd, collEx6Memo, idTache));
}

/**
 * Bascule l'état d'une tâche (complétée/non-complétée) dans la collection Firestore.
 * @param {string} idTache Identifiant de la tâche à modifier.
 * @param {boolean} etatCompletee État actuel de la tâche.
 * @returns {Promise} Promesse indiquant la mise à jour.
 */
export async function modifier(idTache, etatCompletee) {
  await updateDoc(doc(bd, collEx6Memo, idTache), {
    completee: !etatCompletee,
  });
}
