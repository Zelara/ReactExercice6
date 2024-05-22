import Tache from "./Tache";
import "./ListeTaches.scss";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { lireTout, supprimer, modifier } from "../code/tache-modele";

export default function ListeTaches({ taches, setTaches }) {
  useEffect(() => {
    async function chercherTaches() {
      try {
        // Chercher toutes les tâches dans Firestore ...
        // N'oubliez pas ***d'attendre*** que le code asynchrone soit complété
        const toutesLesTaches = await lireTout();
        // ... puis raffraîchir l'état React des tâches.
        setTaches(toutesLesTaches);
      } catch (error) {
        console.error("Erreur lors de la récupération des tâches: ", error);
      }
    }
    chercherTaches();
  }, [setTaches]);

  /**
   * Supprime une tâche.
   * @param {string} idTache Identifiant de la tâche à supprimer
   */
  async function supprimerTache(idTache) {
    try {
      // Supprimer la tâche dans Firestore ...
      // Si vous attendez que le code asynchrone soit complété, il faut
      // marquer cette fonction comme étant asynchrone ;-)
      await supprimer(idTache);

      // ... puis raffraîchir l'état React des tâches.
      setTaches(taches.filter((tache) => tache.id !== idTache));
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche: ", error);
    }
  }

  /**
   * Fait basculer l'état de la tâche (complétée <-> non-complétée).
   * @param {string} idTache Identifiant de la tâche à faire basculer
   * @param {boolean} etatCompletee état actuel de la tâche
   */
  async function basculerEtatTache(idTache, etatCompletee) {
    try {
      // Modifier l'état de la tâche dans Firestore ...
      await modifier(idTache, etatCompletee);
      // ... puis raffraîchir l'état React des tâches.
      setTaches(
        taches.map((tache) => {
          if (tache.id === idTache) {
            tache.completee = !tache.completee;
          }
          return tache;
        })
      );
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de l'état de la tâche: ",
        error
      );
    }
  }

  return (
    <section className="Taches">
      <AnimatePresence>
        {taches.length === 0 ? (
          <div className="msg-aucune-tache">
            <span className="emoji-anime">&#x1F483;</span>
            Wouhou, t'as rien à faire !
            <span className="emoji-anime">&#x1F57A;</span>
          </div>
        ) : (
          taches.map((tache) => (
            <Tache
              // Requis par React
              key={tache.id}
              // On étale toutes les propriétés de l'objet
              // "tache" comme des props du composant Tache
              {...tache}
              // On ajoute des props pour les méthodes des
              // fonctionnalités requises :
              supprimerTache={supprimerTache}
              basculerEtatTache={basculerEtatTache}
            />
          ))
        )}
      </AnimatePresence>
    </section>
  );
}
