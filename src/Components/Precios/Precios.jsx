import React from 'react';
import './Precios.css';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Precios = () => {
    const WavesBox = (props) => {
        return(
            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 388">
                <title>wave (1)</title>
                <path className="cls-1" fill={props.color} opacity={props.opacity ? props.opacity : '0.81'} d="M2,194l34.3-32.28C70.6,128.83,139,65.17,208,40.47c68.3-23.8,137-8.64,205,40.31C482,128.83,551,210.67,619,194,687.7,177.33,756,65.17,825,48.5c68.4-16.67,137,65.17,206,113.22,68.1,48.95,137,64.11,205,48.5,68.9-16.22,137-64.72,172-89L1442,97V388H2Z"/>
                <path className="cls-2" fill={props.color} opacity={props.opacity_2 ? props.opacity_2 : '0.81'} fillOpacity={props.fillopacity_2 ? props.fillopacity_2 : '0.7'} d="M0,97l34.35,24.25C68.7,145.5,137.19,194,206.29,226.28c68.39,32.89,137.19,48,205.28,32.44C480.67,242.5,549.76,194,617.86,186c68.79-8.64,137.19,24.7,206.28,48.5,68.5,24.7,137.19,39.86,206.29,32.28,68.19-7.58,137.19-40.92,205.28-89,69-48.95,137.19-112.61,172.24-145.5L1442,0V388H0Z"/>
                <path className="cls-3" fill={props.color} opacity={props.opacity_3 ? props.opacity_3 : '0.81'} fillOpacity={props.fillopacity_3 ? props.fillopacity_3 : '0.5'} d="M2,315.19l60-35.61C122,244,242,172.73,362,137.11s240-35.61,360-17.8,240,53.42,360,59.32c120,6.34,240-18.14,300-29.61l60-11.91V386.42H2Z"/>
            </svg>
        );
    }


    return(
        <Section>
            <Container>
                <Heading className="has-text-centered" >Precios y Licencias</Heading>

                <Columns breakpoint="mobile" className="is-vcentered" variableGap={{mobile: 3, desktop: 8}}>
                    <Columns.Column mobile={{size: 12}} desktop={{size: 4}}  tablet={{size:12}}>
                        {/* <p className="has-text-centered">Samir® System es un software o programa de Facturación y contabilidad que incluye la Gestión financiera, administrativa, comercial, 
                        productiva y operativa, que crece constantemente con la ayuda de sus clientes y ha sido basado en modelos de calidad, para ofrecer lo mejor a nuestros exitosos clientes.</p> */}

                        <div className="card_">
                            <div className="card_side card_side--front-1">
                                <div className="card_title card_title--1">
                                    {/* <icon></icon> */}
                                    <h1 className="card_heading">Basic</h1>
                                    <h2 className="card_heading_price" >$433.43</h2>
                                    <h2 className="card_heading_period" >3 *Mensual</h2>
                                </div>
                                <div className="card_details">
                                    <ul className="wrapper_li">
                                        <li><FontAwesomeIcon icon={faCheck} /> 1 website</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> ssd storgae</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> free ssl</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> hosted site</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> unmetered bandwidth</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> specasdasds sadsadas</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> Lorem, ipsum dolor.</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> Lorem, ipsum.</li>
                                    </ul>
                                </div>
                                <Button color="danger" className="btn_select" >Seleccionar</Button>
                                {/* <img className="waves" alt="waves" src={require("../../media/Assets/waves shapes/wave1.svg")} /> */}
                                <WavesBox color='#8d31b5' opacity='0.8' fillopacity_2='0.5' fillopacity_3='0.5'/>
                            </div>
                        </div>

                    </Columns.Column>
                    <Columns.Column mobile={{size: 12}} desktop={{size: 4}}  tablet={{size:12}}>
                        {/* <p className="has-text-centered">Samir® System es un software o programa de Facturación y contabilidad que incluye la Gestión financiera, administrativa, comercial, 
                        productiva y operativa, que crece constantemente con la ayuda de sus clientes y ha sido basado en modelos de calidad, para ofrecer lo mejor a nuestros exitosos clientes.</p> */}

                        <div className="card_">
                            <div className="card_side card_side--front-1">
                                <div className="card_title card_title--1">
                                    {/* <icon></icon> */}
                                    <h1 className="card_heading">Basic</h1>
                                    <h2 className="card_heading_price" >$433.43</h2>
                                    <h2 className="card_heading_period" >3 *Mensual</h2>
                                </div>
                                <div className="card_details">
                                    <ul className="wrapper_li">
                                        <li><FontAwesomeIcon icon={faCheck} /> 1 website</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> ssd storgae</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> free ssl</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> hosted site</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> unmetered bandwidth</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> specasdasds sadsadas</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> Lorem, ipsum dolor.</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> Lorem, ipsum.</li>
                                    </ul>
                                </div>
                                <Button color="danger" className="btn_select" >Seleccionar</Button>
                                {/* <img className="waves" alt="waves" src={require("../../media/Assets/waves shapes/wave1.svg")} /> */}
                                <WavesBox color='#3232a8' opacity='0.8' fillopacity_2='0.9' fillopacity_3='0.7'/>
                            </div>
                            

                        </div>

                    </Columns.Column>
                    <Columns.Column mobile={{size: 12}} desktop={{size: 4}}  tablet={{size:12}}>

                        <div className="card_">
                            <div className="card_side card_side--front-1">
                                <div className="card_title card_title--1">
                                    {/* <icon></icon> */}
                                    <h1 className="card_heading">Basic</h1>
                                    <h2 className="card_heading_price" >$433.43</h2>
                                    <h2 className="card_heading_period" >3 *Mensual</h2>
                                </div>
                                <div className="card_details">
                                    <ul className="wrapper_li">
                                    <li><FontAwesomeIcon icon={faCheck} /> 1 website</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> ssd storgae</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> free ssl</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> hosted site</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> unmetered bandwidth</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> specasdasds sadsadas</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> Lorem, ipsum dolor.</li>
                                        <li><FontAwesomeIcon icon={faCheck} /> Lorem, ipsum.</li>
                                    </ul>
                                </div>
                                <Button color="danger" className="btn_select" >Seleccionar</Button>
                                {/* <img className="waves" alt="waves" src={require("../../media/Assets/waves shapes/wave1.svg")} /> */}
                                <WavesBox color="#f09951" opacity='0.7' opacity_2='1' opacity_3='0.4' fillopacity_2='0.5' fillopacity_3='0.9'/>


                            </div>
                            

                        </div>

                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    )
}

export default Precios;