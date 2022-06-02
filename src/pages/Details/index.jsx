import { Container, Links, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Preview } from '../../components/Preview';
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { FiArrowLeft } from 'react-icons/fi'
import { PositiveRatings, NegativeRatings } from '../../components/Ratings'
 

export function Details(){

  
      
  


  return(

    

    <Container>
      <Header/>


  
  <main>
  <a href="/"> <FiArrowLeft/> Voltar </a>

  <Preview data={{
        title: 'InterEstelar',
         tags:[
           {id:'1', name:'Ficção Cientifica'},
           {id:'2', name:'Drama'},
           {id:'2', name:'Familia'}
           ],
           rating:'3',
           autor: 'Paulo Pinheiro',
           created_at: '23/05/2022 ás 08:00'
           }} />
   
  </main>

    </Container>
    
  )

}

 