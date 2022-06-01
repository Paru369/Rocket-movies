import { Container, Profile, Logout} from './styles';
import { RiShutDownLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/paru369.png"
        alt = "Foto do usuário"
        />
           <div>
           <span> Bem-vindo, </span>
          <strong> Paulo Pinheiro </strong>
        </div>
     
      </Profile>

      <Logout>
        < RiShutDownLine />
      </Logout>
     
    </Container>
  );
} 

