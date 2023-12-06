/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response);
    }

    getData(exampleActions.clicaBotãoRequest());
  }, []);
  const dispatch = useDispatch();

  function handleCliclk(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotãoRequest());
  }
  return (
    <Container>
      <Title>
        <h2>Login</h2>
        <Paragrafo>Lorem ipsum</Paragrafo>
      </Title>
      <button type="button" onClick={handleCliclk}>
        Enviar
      </button>
    </Container>
  );
}
