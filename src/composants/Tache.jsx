import './Tache.scss';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { motion } from "framer-motion";
import formaterDateEtHeure from '../code/util';

export default function Tache({id, texte, completee, date, supprimerTache, basculerEtatTache}) {
  
  return (
    // Voir : https://www.framer.com/motion/introduction/
    <motion.div 
      className={`Tache ${completee ? 'completee': ''}`}
      initial={{ y:'-100%', opacity: 0 }}
      animate={{ y:'0%', opacity: completee ? 0.7 : 1 }}
      exit={{ y:'-100%', opacity: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <IconButton color="success" onClick={() => basculerEtatTache(id, completee)}>
        <CheckCircleIcon />
      </IconButton>
      <div className="infoTache">
        <span className="texte">{texte}</span>
        <span className="date">({formaterDateEtHeure(new Date(date))})</span>
      </div>
      <IconButton color="error" onClick={() => supprimerTache(id)}>
        <RemoveCircleIcon />
      </IconButton>
    </motion.div>
  );
}