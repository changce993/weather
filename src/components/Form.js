import React, { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const FormComponent = styled.form`
    padding:20px;
    background-color: white;
    width:100vw;

    div{
        position:relative;
        margin:3rem 0;
    }

    input#ciudad, select{
        border:none;
        outline:none;
        background:transparent;
        border-bottom:1px solid var(--color-one);
        border-radius:0;
        width:100%;
        _appearance: none;
        padding:0 10px;
    }
    
    label {
        position: absolute;
        top: -1.5rem;
        left: 5px;
        color: #909090;
        cursor: text;
        transition:.3s;
    }

    button{
        width:100%;
        outline:none;
        border:none;
        border-radius:4px;
        padding:10px 0;
        color:var(--color-white);
        background: linear-gradient(90deg, var(--color-one), var(--color-two));
    }

    @media(min-width: 769px){
        width:30vw;
        position:relative;
        
        label{
            position:absolute;
            top:-1.5rem;
            font-size:.7rem;
            color: #909090;
        }
    }
`

const Form = ({busqueda, guardarBusqueda, guardarConsulta}) => {

    const [error, guardarError] = useState(false)

    const {ciudad, pais} = busqueda;

    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true)
            return
        }

        guardarError(false)
        guardarConsulta(true)
    }

    return (
        <FormComponent 
            onSubmit={handleSubmit}
        >

        {error ? <p>Todos los campos son obligatorios</p> : null}
            <div>
                <div>
                    <input
                        className="w-20"
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad:</label>
                </div>

                <div>
                    <select
                        value={pais}
                        name="pais"
                        onChange={handleChange}
                    >
                        <option value="">--- Seleccione un pais ---</option>
                        <option value="AR">Argentina</option>
                        <option value="BR">Brasil</option>
                        <option value="CL">Chile</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="US">Estados Unidos</option>    
                        <option value="ES">España</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>
                        <option value="VE">Venezuela</option>
                    </select>

                    <label>País</label>
                </div>
            </div>

            <button type="submit">Buscar clima</button>
        </FormComponent>
    )
}

Form.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsulta: PropTypes.func.isRequired
}

export default Form
