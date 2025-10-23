import './style.css'
import Perfil from '../../imgs/perfil.svg'
import Sacola from '../../imgs/sacola.svg'
const icones = [Perfil, Sacola];

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone} alt='icone'></img></li>
            ))}
        </ul>
    )
}

export default IconesHeader