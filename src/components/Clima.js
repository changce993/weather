import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ClimaComponent = styled.div`


    h2, p.temperatura, p.temperatura span{
        font-size:3rem;
        line-height:2rem;
    }

    h2, p, span{
        text-align:center;
    }

    @media(min-width: 769px){
        width:70vw;

        h2, p.temperatura, p.temperatura span{
            font-size:3rem;
            line-height:2rem;
        }

        h2, p, span{
            text-align:center;
        }
    }
`

const Clima = ({resultado}) => {

    const {name, main} = resultado;
    let kelvin = 273.15

    if(!name){ return null }

    return (
        <ClimaComponent>
            <h2>{name}</h2>
            <p className="temperatura">{parseFloat(main.temp - kelvin).toFixed(2)} <span> &#x2103; </span></p>
            <p>Temperatura maxima: {parseFloat(main.temp_max - kelvin).toFixed(2)} <span> &#x2103; </span></p>
            <p>Temperatura minima: {parseFloat(main.temp_min - kelvin).toFixed(2)} <span> &#x2103; </span></p>
        </ClimaComponent>
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima
