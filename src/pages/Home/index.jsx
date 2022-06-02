import {Container, Content} from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import {Section } from '../../components/Section';
import { Note } from '../../components/Note';


import { Link } from 'react-router-dom';

export function Home(){
  return(
<Container>

<Header/>
  
  <Content>

    <header>

    <Section title = "Meus Filmes"/> <Link to="/new"><Button title="+ Adicionar filme"/></Link>

     </header>

    

      <Note data={{
        title: 'InterEstelar',
         tags:[
           {id:'1', name:'Ficição Cientifica'},
           {id:'2', name:'Drama'},
           {id:'2', name:'Familia'}
           ],
           rating:'0',
           }} 
      />
       <Note data={{
        title: 'Jumanji',
         tags:[
           {id:'1', name:'Ficção'},
           {id:'2', name:'Aventura'}
           ] ,
           rating: '4',
           }} 
      />

    <Note data={{
        title: 'SpiderMan',
         tags:[
           {id:'1', name:'Ação'},
           {id:'2', name:'Aventura'}
           ] ,
           rating: '5',
           }} 
      />
           
           


    

  </Content>

 
    

</Container>

  )
}