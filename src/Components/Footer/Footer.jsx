import React from 'react'

import { Link } from 'react-router-dom'
import './Footer.css';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import FooterComponent from 'react-bulma-components/lib/components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faDownload, faLifeRing, faHome, faUser, faShieldAlt, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faWhatsappSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return(
            <FooterComponent className="footer-area">
                <Container className="container">
                    <Columns breakpoint="mobile" className="is-vcentered" variableGap={{mobile: 3, desktop: 8}}>
                        <Columns.Column mobile={{size: 12}} desktop={{size: 4}}  tablet={{size:3}}>
                            <div className="wrapper_col1">
                                <Heading>Redes Sociales:</Heading>
                                <ul className="list_footer">
                                    <li><FontAwesomeIcon icon={faWhatsappSquare} /> +593-967135545</li>
                                    <li><FontAwesomeIcon icon={faFacebookSquare} />excellentsoft.net</li>
                                    <li><FontAwesomeIcon icon={faTwitterSquare} />@excellent_soft</li>
                                    <li><FontAwesomeIcon icon={faEnvelope} />support@excellentsoft.net</li>
                                </ul>
                            </div>
                        </Columns.Column>
                        <Columns.Column mobile={{size: 12}} desktop={{size: 4}}  tablet={{size:3}}>
                            <div className="wrapper_col2">
                                <Heading>Contenido:</Heading>
                                <ul className="list_footer">
                                    <li><FontAwesomeIcon icon={faDownload} />Descargas</li>
                                    <li><FontAwesomeIcon icon={faLifeRing} />Soporte</li>
                                    <li><FontAwesomeIcon icon={faHome} />Excellentsoft™</li>
                                </ul>
                            </div>
                        </Columns.Column>
                        <Columns.Column mobile={{size: 12}} desktop={{size: 4}}  tablet={{size:3}}>
                            <div className="wrapper_col3">
                                <Heading>Acerca de Excellentsoft™?:</Heading>
                                <ul className="list_footer">
                                    <li><FontAwesomeIcon icon={faUser} />Acerca de Nosotros</li>
                                    <li><Link to="/politicas"> <FontAwesomeIcon icon={faShieldAlt} />Politicas de Privacidad</Link></li>
                                    <li><Link to="/terminos" ><FontAwesomeIcon icon={faFileSignature} />Terminos y Condiciones </Link></li>
                                </ul>
                            </div>
                        </Columns.Column>
                    </Columns>
                </Container>
            </FooterComponent>
       
    )
}

export default Footer;