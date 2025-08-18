import './TopBarPagamento.css'
import logo from '../assets/netflix.png';
import iconeReact from '../assets/Perfil.jpg'
import { IoMdArrowDropdown } from "react-icons/io";

function TopBarPagamento() {
  return (
    <div className='top-bar-pagar'>
      <img className='logo' src={logo} />
      <div className='parte12'>
        <img className='foto-perfil' src={iconeReact} />
        <IoMdArrowDropdown className='seta' />
      </div>
    </div>
  );
}

export default TopBarPagamento;
