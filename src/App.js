import './App.css';
import Logo from './componentes/Logo';
import Perfil from './imgs/perfil.svg';
import Sacola from './imgs/sacola.svg';
import OpcoesHeader from './componentes/OpcoesHeader';
const icones = [Perfil, Sacola];

function App() {
  return (
    <div className='App'>
      <header className='App_header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>

        <ul className='icones'>
          {icones.map( (icone) => (
            <li className='icone'><img src={icone} alt='icone'></img></li>
          ) )}
        </ul>
      </header>
    </div>
  );
};

export default App;
