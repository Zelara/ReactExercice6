import './Controle.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

export default function Controle({taches}) {  
  const nbTachesActives = taches.reduce((acc, tache) => acc + (tache.completee?0:1), 0);
  return (
    <footer className="Controle">
      <ToggleButtonGroup 
        size="small" 
        exclusive={true} 
      >
        <ToggleButton value={'toutes'}>Toutes</ToggleButton>
        <ToggleButton value={true}>Complétées</ToggleButton>
        <ToggleButton value={false}>Actives</ToggleButton>
      </ToggleButtonGroup>
      <span className="compte">
        {nbTachesActives + (nbTachesActives>1?' tâches actives':' tâche active')}
      </span>
      <div className="supprimer-completees">
        <Button 
          aria-label="Supprimer toutes les tâches complétées"
          color="error" 
          title="Supprimer toutes les tâches complétées"
          variant='contained'
          size='small'
        >
          Supprimer complétées
        </Button>
      </div>
    </footer>
  );
}