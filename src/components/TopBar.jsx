import './TopBar.css';
import logo from '../assets/netflix.png';
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className='top-bar'>
      <Link className='parte12' to='' >
        <img className='logo' src={logo} />
        <span className='link'>Início</span>
        <span className='link'>Séries</span>
        <span className='link'>Filmes</span>
        <span className='link'>Bombando</span>
        <span className='link'>Minha Lista</span>
        <span className='link'>Navegar por idiomas</span>
      </Link>
      <Link className='parte22' to='/conta'>
        <FaRegUser className='image' />
        <span>Conta</span>
      </Link>
    </div>
  );
}

export default TopBar;
