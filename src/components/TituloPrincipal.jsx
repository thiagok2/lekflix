import './TituloPrincipal.css'

import { SiNetflix } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSpeakerHighLight } from "react-icons/pi";
import { TbRating12Plus } from "react-icons/tb";


function TituloPrincipal() {
  return (
    <div className='titulo-principal'>
      <div className='n'>
        <SiNetflix />
        <span className='pequeno'>SÉRIE</span>
      </div>

      <div className='titulo'>
        <span className='linha1'>A GRANDE  </span>
        <span className='linha2'> DESCOBERTA </span>
      </div>

      <div className='resto'>
        <div className='play'>
          <FaPlay className='emoji' />
          <span> Assistir </span>
        </div>

        <div className='informacao'>
          <IoMdInformationCircleOutline className='emoji' />
          <span>Mais informaçoẽs</span>
        </div>

        <div className='som'>
          <PiSpeakerHighLight />
        </div>

        <div className='idade'>
          <TbRating12Plus />
        </div>
      </div>
    </div>
  );
}
export default TituloPrincipal;
