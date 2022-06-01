import {Container, Brand, Menu, Search, Content, NewNote} from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import {Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function Home(){
  return(
<Container>


  <Brand>
  <h1>Rocketnotes</h1>

  </Brand>
<Header/>
  

  <Menu>
    <li><ButtonText title= "Todos" isActive /></li>
    <li><ButtonText title= "Fronted" /></li>
    <li><ButtonText title= "Node.js" /></li>
    <li><ButtonText title= "ReactJS" /></li>
    
    
    

  </Menu>

  <Search>

    <Input placeholder = "Pesquisar pelo título" icon = {FiSearch} />

  </Search>

  <Content>

    <Section title = "Minhas Notas">
      <Note data={{
        title: 'React Modal',
         tags:[
           {id:'1', name:'react'},
           {id:'2', name:'node'}
           ] 
           }} />

    </Section>

  </Content>

  <NewNote to= "/new">
<FiPlus/>
Criar nota
  </NewNote>
    

</Container>

  )
}