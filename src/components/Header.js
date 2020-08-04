import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const NavComponent = styled.nav`
    background: linear-gradient(90deg, var(--color-one), var(--color-two));
    box-sizing:border-box;
    padding: 20px 0;
    box-shadow: 0 0 6px rgba(204,204,204,.5);
    width:100%;
    
    a{
        color:var(--color-white);
        text-decoration: none;
        font-size: 2rem;
        letter-spacing: 10px;
    }
`

const Header = ({ titulo }) => {



    return (
        <Fragment>
            <NavComponent className="headerNav">
                <a className="d-flex justify-content-center" href="#!">{titulo}</a>
            </NavComponent>
        </Fragment>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header
