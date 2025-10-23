import './style.css'
import logo from '../../imgs/logo.svg'

function Logo (){
    return(
        <div className='Logo'>
            <img src={logo} alt='Logo da Alura Books' className='Logo_img'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
    
}

export default Logo