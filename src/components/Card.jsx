import './Card.css'
import iconeReact from '../assets/Perfil.jpg'
import { Link } from 'react-router-dom';
import mano from '../assets/manel.jpeg'

function Card() {
  return (
    <Link className='card' to='/home'>
      <img className='foto-perfil' src={iconeReact} />
      <span className='nome-usuario'>Nicolas</span>
    </Link>
  );
}

export default Card;