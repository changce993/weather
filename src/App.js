import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Clima from './components/Clima'
import Error from './components/Error'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 1920px;
  margin:auto;

  @media(min-width: 769px){
    display:flex;
  }
`

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [resultado, guardarResultado] = useState({})
  const [consultar, guardarConsulta] = useState(false)
  const [error, guardarError] = useState(false)
  const {ciudad, pais} = busqueda;

  useEffect( () => {
    const consultarAPI = async () => {
      if(consultar){
        const apiId = '8e345629754afe7764fbe86a476730c4';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`

        const respuesta = await fetch(url)
        const resultadoJSON = await respuesta.json()

        console.log(resultadoJSON)

        guardarResultado(resultadoJSON)
        guardarConsulta(false)

        if(resultadoJSON.cod === '404'){
          guardarError(true)
        } else {
          guardarError(false)
        }
      }
    }
    consultarAPI()

    // eslint-disable-next-line
  }, [consultar])

  return (
    <Fragment>
        <Header titulo={'Clima hoy'}/>
        
        <Container >
          <Form 
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsulta={guardarConsulta}
          />

          {error ? <Error mensaje={'No hay resultados'}/> : <Clima resultado={resultado}/>}
          
        </Container>
    </Fragment>
  );
}

export default App;