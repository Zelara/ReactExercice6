# Exercice #6 : Intégrer la BD nuagique `Firestore` dans une application `React`.
## Travail d'équipe permis (mais pas plus de 2 personnes par équipe).

## Objectif/exigences généraux
* Intégrer des données d'un environnement nuagique et gérer la programmation asynchrone en JavaScript

* En partant de ma solution modèle au TP #1 (Memo), vous intégrez les données nécessaires à l'application avec `Firebase/Firestore`

* Pour cet exercice, on se limite aux données des "tâches", sans s'occuper de la gestion des utilisateurs

## Étapes à suivre
1. Clonez le dépôt sur votre machine locale (ou utilisez `GitHub Codespaces`)

2. Installez les modules de base de l'appli

3. Installez `Firebase` (https://firebase.google.com/docs/web/setup)

4. Dans votre console `Firebase`, utilisez votre projet existant pour y ajouter une nouvelle "appli" nommée `ex6-memo`

5. Dans votre BD `Firestore`, ajoutez une collection nommée `ex6-memo` et ajustez vos règles de sécurité pour donner accès à cette collection sans aucune restriction en lecture et en écriture. Autrement dit, ajoutez la règle suivante : 
<code>
  match /ex6-memo/{tache} {
    allow read, write : if true        
  }
</code>

6. Copiez votre objet de configuration `Firebase` et intégrez-le de la façon appropriée (dans le fichier nommé `code/config.js`)

7. Créez un fichier nommé `code/init.js` contenant le code JavaScript nécessaire pour instancier dans des constantes appropriées les fonctionnalités `Firebase` dont vous avez besoin (dans ce cas, uniquement `Firebase` et `Firestore`) : encore une fois inspirez-vous de ce qui a été fait dans l'exemple de classe

8. Dans un fichier nommé `code/tache-modele.js`, produisez le code JavaScript pour gérer les données des tâches dans cette collection Firestore : encore une fois inspirez-vous de ce qui a été fait dans l'exemple de classe !!! Voici les opérations sur la BD dont nous avons besoin (une fonction asynchrone sera requise pour chaque opération) :
    1. Ajout d'une tâche (`creer`)
    2. Lecture de toutes les tâches triées par date d'ajout (`lireTout`)
    3. Supprimer une tâche (`supprimer`)
    4. Basculer l’état d’une tâche (complétée/non-complétée) (`modifier`)
    
    >Ajoutez des commentaires JSDoc à toutes les fonctions définies dans ce fichier !

9. Dans les composants `React` de votre application, complétez le code nécessaire pour intégrer les données `Firestore` aux fonctionnalités de votre appli (en faisant appel bien évidement aux fonctions produites dans le fichier *modèle* du point précédent). 
    >Notez que pour les besoins de cet exercice **vous ne devez pas** intégrer les fonctionnalités de la barre de contrôle dans le pied de page de l'application (*filtre des tâches*, *supprimer les tâches complétées*, *nombre de tâches actives*). 

    Le code de l'interactivité `UI` des 4 fonctionnalités est déjà fourni, vous n'avez qu'à compléter ce code pour intégrer le code de gestion des données que vous avez produit au point précédent :
      1. Dans le composant `AjoutTache` : fonction `ajouterTache`
      1. Dans le composant `ListesTaches` : fonctions `chercherTaches`, `supprimerTache` et `basculerEtatTache`
      1. :warning: Aucun autre composant n'a besoin d'être modifié pour compléter l'exercice

    >Faites bien attention de raffraichîr (à la main) le navigateur Web quand vous testez chacune des fonctionnalités ! Si vous avez des erreurs dans le code d'intégration des données `Firestore`, ça n'apparaîtra que si vous raffraîchissez la page (ou alors, surveillez la *console* JS pour les erreurs de l'API `Firestore`)

10. Synchronisez votre solution complétée avec le dépôt `GitHub` qui vous a été assigné lorsque vous aviez accepté le travail. Écrivez **TOUJOURS** des messages de *commit* significatifs !

11. (OPTIONNEL) Si vous savez le faire, déployez votre solution sur `Firebase Hosting` en mode *multi-sites* au besoin (lorsque vous utilisez un projet Firebase qui héberge déjà une autre appli...)

### Gardez une copie personnelle de votre travail : les dépôts de remises sur `582-4PA` seront supprimés une fois les notes publiées.