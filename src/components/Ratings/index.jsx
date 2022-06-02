import { Container } from './styles'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai';




export function PositiveRatings({title}){

  
  let rating =parseInt(title);
  let starPositive = rating 
   let starPositiveArray = []
 

  for( let i = 0; i < starPositive; i++)
  { 
    starPositiveArray.push(i)
    
  }

 
  

  return(

    starPositiveArray.map(dat => PositiveRatingsPlot() ) 
    
  );

};

export function NegativeRatings({title}){

  

  let rating =parseInt(title);
    let starNegative = 5 - rating
    let starNegativeArray = []

  for( let i = 0; i < starNegative; i++)
  { 
    starNegativeArray.push(i)
    
  }
  

  return(

    starNegativeArray.map(dat => NegativeRatingsPlot()) 
  );

};



 function PositiveRatingsPlot(){

  

  return(

    <Container >
      
      <AiFillStar/>
    </Container>
  );

};

 function NegativeRatingsPlot(){

  return(

    <Container >
      <AiOutlineStar/>
    </Container>
  );

};