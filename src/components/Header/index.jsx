import { Container, Profile, Logout} from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { Input } from '../../components/Input';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function Header(){
  return (
    <Container>

      <h1>RocketMovies</h1>

      <Input placeholder = "Pesquisar pelo título" icon = {FiSearch} />

      <Profile to="/profile">
        
           <div>
           
          <strong> Paulo Pinheiro </strong>
          <span> sair </span>
        </div>

        <img src="https://github.com/paru369.png"
        alt = "Foto do usuário"
        />
     
      </Profile>

      
     
    </Container>
  );
} 

