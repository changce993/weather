import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ErrorComponent = styled.h2`
    text-align:center;
    font-size:center;

    @media(min-width: 769px){
        font-size:2rem;
        width:70vw;
    }
`

const Error = ({mensaje}) => {
    return (
        <ErrorComponent>{mensaje}</ErrorComponent>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error
