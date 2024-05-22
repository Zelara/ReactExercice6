import Tache from './Tache';
import './ListeTaches.scss';
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react';

export default function ListeTaches({taches, setTaches}) {
  useEffect(()=> {
    async function chercherTaches() {
      // Chercher toutes les tâches dans Firestore ...
      // N'oubliez pas ***d'attendre*** que le code asynchrone soit complété

      // ... puis raffraîchir l'état React des tâches.
      
    }
    chercherTaches();
  }, []);
  
  /**
   * Supprime une tâche.
   * @param {string} idTache Identifiant de la tâche à supprimer
   */
  function supprimerTache(idTache) {
    // Supprimer la tâche dans Firestore ...
    // Si vous attendez que le code asynchrone soit complété, il faut 
    // marquer cette fonction comme étant asynchrone ;-)


    // ... puis raffraîchir l'état React des tâches.
    setTaches(taches.filter(
      tache => tache.id !== idTache
    ))
  }

  /**
   * Fait basculer l'état de la tâche (complétée <-> non-complétée).
   * @param {string} idTache Identifiant de la tâche à faire basculer
   * @param {bool} etatCompletee état actuel de la tâche
   */
  function basculerEtatTache(idTache, etatCompletee) {
    // Modifier l'état de la tâche dans Firestore ...
    // Si vous attendez que le code asynchrone soit complété, il faut 
    // marquer cette fonction comme étant asynchrone ;-)

    
    // ... puis raffraîchir l'état React des tâches.
    setTaches(
      taches.map(tache => {
        if(tache.id === idTache) {
          tache.completee = !tache.completee;
        }
        return tache;
      })
    )
  }

  return (
    <section className="Taches">
      <AnimatePresence>
        {
          (taches.length === 0)
          ?
            <div className='msg-aucune-tache'>
              <span className="emoji-anime">&#x1F483;</span> 
              Wouhou, t'as rien à faire ! 
              <span className="emoji-anime">&#x1F57A;</span>
            </div>
          :
            taches.map(tache => <Tache
                                  // Requis par React
                                  key={tache.id}     
                                  // On étale toutes les propriétés de l'objet 
                                  // "tache" comme des props du composant Tache
                                  {... tache} 
                                  // On ajoute des props pour les méthodes des 
                                  // fonctionnalités requises :
                                  supprimerTache={supprimerTache} 
                                  basculerEtatTache={basculerEtatTache}
                                />)
        }
      </AnimatePresence>
    </section>
  );
}