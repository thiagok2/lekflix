import './MenuLateral.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { GoCreditCard } from "react-icons/go";
import { BsShieldCheck } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { TbRobotFace } from "react-icons/tb";
import { Link } from 'react-router-dom';


function MenuLateral() {
  return (
    <div className='papai'>

      <Link className='d1 ' to='/home'>
        <FaArrowLeftLong />
        <span>Voltar á Netflix </span>
      </Link>
      <div className='d2'>
        <GoHomeFill />
        <span> Virsão geral </span>
      </div>

      <div className='d3'>
        <GoCreditCard />
        <span>Assinatura</span>
      </div>

      <div className='d4'>
        <BsShieldCheck />
        <span>Segurança</span>
      </div>

      <div className='d5'>
        <LuMonitorSmartphone />
        <span>Aparelhos</span>
      </div>

      <div className='d6 '>
        <TbRobotFace />
        <span>Perfis</span>
      </div>

    </div>
  );

}

export default MenuLateral;