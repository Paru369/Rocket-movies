import { Container, Container2 } from "./styles";


export function Button({title, loading, ...rest}){
   return(
<Container 
type="button"
disabled = {loading}
{...rest}
>
  {loading ? 'Carregando...' : title}
  </Container>
)
}

export function ButtonDark({title}){
  return(
<Container2 
type="button"

>
 {title}
 </Container2>
)
}