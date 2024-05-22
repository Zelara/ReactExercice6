import './AjoutTache.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function AjoutTache({taches, setTaches, setFiltre}) {
    /**
     * Ajouter une nouvelle tâche.
     * @param {Event} evt Objet Event JS qui a déclenché l'appel
     */
    function ajouterTache(evt) {
        // Prévenir le formulaire d'être soumit (et de faire une requête HTTP 
        // qui causerait une actualisation de la page !!!)
        evt.preventDefault();
        // Récupérer la valeur de la boîte de texte
        const texte = evt.target.texteTache.value;
        // Si le texte est vide, oublie ça ;-) TODO : faire une meilleure 
        // validation ici (avec un regexp simple)
        if(texte.trim() !== '') {
            // Bonne idée : vider le formulaire pour la prochaine tâche
            evt.target.reset();
            
            // On prépare l'objet représentant la nouvelle tâche
            const nouvelleTache = {
                texte: texte,
                completee: false,
                date: (new Date()).getTime()
            };

            // Insérer la nouvelle tâche dans la collection Firestore et 
            // récupérer son identifiant généré par Firestore ...

            
            // ... et raffraîchir l'état des tâches une fois le code 
            // asynchrone est complété  (avec setTaches())

        }
    }
    return (
        <section className='AjoutTache'>
            <form onSubmit={evt => ajouterTache(evt)}>
                <input 
                    type="text"   
                    placeholder="Ajoutez une tâche ..." 
                    name="texteTache"
                    autoComplete="off" 
                    autoFocus={true} 
                />
                {/* J'ai utilisé un bouton MUI pour l'uniformité avec le reste 
                de mes éléments d'interactivité de l'interface, mais un bouton 
                HTML <button> aurait aussi bien fait l'affaire, exactement de la 
                même manière. */}
                <Button variant='contained' type='submit' className='btn-ajout-tache' size='small'>
                    <SendIcon />
                </Button>
            </form>
        </section>
    );
}   