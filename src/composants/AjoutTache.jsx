import "./AjoutTache.scss";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { creer } from "../code/tache-modele.js";

export default function AjoutTache({ taches, setTaches, setFiltre }) {
  /**
   * Ajouter une nouvelle tâche.
   * @param {Event} evt Objet Event JS qui a déclenché l'appel
   */
  async function ajouterTache(evt) {
    // Prévenir le formulaire d'être soumis (et de faire une requête HTTP
    // qui causerait une actualisation de la page !!!)
    evt.preventDefault();
    // Récupérer la valeur de la boîte de texte
    const texte = evt.target.texteTache.value;
    // Si le texte est vide, oublie ça ;-) TODO : faire une meilleure
    // validation ici (avec un regexp simple)
    if (texte.trim() !== "") {
      // Bonne idée : vider le formulaire pour la prochaine tâche
      evt.target.reset();

      // On prépare l'objet représentant la nouvelle tâche
      const nouvelleTache = {
        texte: texte,
        completee: false,
        date: new Date().getTime(),
      };

      try {
        // Insérer la nouvelle tâche dans la collection Firestore et
        // récupérer son identifiant généré par Firestore
        const id = await creer(nouvelleTache);

        // Raffraîchir l'état des tâches une fois le code asynchrone est complété
        setTaches([...taches, { id, ...nouvelleTache }]);
      } catch (error) {
        console.error("Erreur lors de l'ajout de la tâche: ", error);
      }
    }
  }

  return (
    <section className="AjoutTache">
      <form onSubmit={ajouterTache}>
        <input
          type="text"
          placeholder="Ajoutez une tâche ..."
          name="texteTache"
          autoComplete="off"
          autoFocus={true}
        />
        <Button
          variant="contained"
          type="submit"
          className="btn-ajout-tache"
          size="small"
        >
          <SendIcon />
        </Button>
      </form>
    </section>
  );
}
