import './Carrossel.css'

import alpha from '../assets/alphas.jpeg'
import round from '../assets/round6.jpeg'
import urso from '../assets/ourso.jpeg'
import the from '../assets/thelast.jpeg'
import falo from '../assets/falout.jpeg'

function Carrossel() {
  return (
    <div className='dad'>
      <div >
        <span className='nome' >Série estrangeiras dubladas em português </span>
      </div>
      <div className='ims'>
        <img src={alpha} className='a' />
        <img src={urso} className='a' />
        <img src={round} className='a' />
        <img src={the} className='a' />
        <img src={falo} className='a' />
      </div>
    </div>
  );
}
export default Carrossel;