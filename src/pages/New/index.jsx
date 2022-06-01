import { Container, Form } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

import { Link } from 'react-router-dom';

export function New(){
return(

  <Container>
    <Header></Header>

    <main>
      <Form>
        <header>
          <h1>Criar nota</h1>
          <Link to="/">voltar</Link>
        </header>

        <Input placeholder = "Titulo" />

        <TextArea placeholder = "Observações" />

        <Section title = "Links úteis">
        <NoteItem value = "https://rocketseat.com.br" />
        <NoteItem isNew placeholder = "Novo link"/>
          
        </Section>

        <Section title = "Marcadores">

        <div className = "tags">
        <NoteItem value = "react" />
        <NoteItem isNew placeholder = "Nova tag"/>
        </div>

          <Button title = "Salvar" />
        </Section>


        


      </Form>
    </main>

  </Container>

)};

