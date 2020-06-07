import React from 'react'
//import { Link, NavLink } from 'react-router-dom'
//import 'react-bulma-components/dist/react-bulma-components.min.css';
//import { Button } from 'react-bulma-components';
import './Inicio.css';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
//import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';
import Image from 'react-bulma-components/lib/components/image'; 
import Button from 'react-bulma-components/lib/components/button';
const Inicio = () => {
    return (
        <Section id={'inicioSection'} className="inicio">
            <Container>
                <Columns breakpoint="mobile" className="is-vcentered" variableGap={{mobile: 3, desktop: 8}}>
                    <Columns.Column mobile={{size: 12}} desktop={{size: 6}}  tablet={{size:6}}>
                        <Image className="banner" src={require("../../media/samir-system-ia.png")} />
                        <p className="has-text-justified text-ini">Sistema de Facturación, gestión empresarial, contable, administrativa,
                            financiera y operativa de su empresa.
                        </p>
                        <Content className="contenedor">
                            <ul className="list-li">
                                <li>Instalación y Capacitación Presenciales</li>
                                <li>Migración de Datos Gratis</li>
                                <li>Adaptación de sistema x1 mes Gratis</li>
                                <li>Respaldos Automáticos en la Nube Gratis 24/7</li>
                                <li>Soporte Técnico Todos los días de por vida</li>
                                <li>Garantía 1 año gratis por reinstalación</li>
                                <li>5% Descuento por pago en Efectivo o Transferencia</li>
                                <li>Para Farmacias, Minimarkets, Ferreterias, Comisariatos, Comerciales, Autoservicios y mucho más...</li>
                            </ul>
                            <div className="btn-wrapper">
                                <Button size={'medium'} className="btn-ini">$Cotizar</Button>
                                <Button size={'medium'}  className="btn-ini" id="btn_outlined" outlined={(true)}>Solicitar Demostración</Button>
                            </div>
                            
                        </Content>
                        
                       
                    </Columns.Column>
                
                    <Columns.Column mobile={{size: 12}} desktop={{size: 6}} tablet={{size:6}} className="col2_inicio" >
                    
                  
                        <Image src={require("../../media/inicio.svg")}  />
                   
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    );
}

export default Inicio;