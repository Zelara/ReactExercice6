import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import ListeTaches from './ListeTaches';
import AjoutTache from './AjoutTache';
import { useState } from 'react';

export default function Appli() {
  // État des tâches
  const [taches, setTaches] = useState([]);

  return (
    <div className="Appli">
      <header className="appli-entete">
        <img src={logo} className="appli-logo" alt="Memo" />
      </header>
      <AjoutTache taches={taches} setTaches={setTaches} />
      <ListeTaches taches={taches} setTaches={setTaches} />
      <Controle taches={taches} />
    </div>
  )
}
