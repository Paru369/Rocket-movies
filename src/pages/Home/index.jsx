import {Container, Content} from './styles';
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


  
<Header/>
  
  <Content>

    <Section title = "Meus Filmes">
      <Note data={{
        title: 'React Modal',
         tags:[
           {id:'1', name:'Ficição Cientifica'},
           {id:'2', name:'Drama'},
           {id:'2', name:'Familia'}
           ] 
           }} 
      />
       <Note data={{
        title: 'React Modal',
         tags:[
           {id:'1', name:'react'},
           {id:'2', name:'node'}
           ] 
           }} 
      />
           


    </Section>

  </Content>

 
    

</Container>

  )
}