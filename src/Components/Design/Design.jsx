import React from 'react';

import './Design.css';
import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';
import Tile from 'react-bulma-components/lib/components/tile';
import Image from 'react-bulma-components/lib/components/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const Design = () => {
    return (
        <Section className="design_section">
                <Columns breakpoint="mobile" className="is-vcentered column_descp" variableGap={{mobile: 3, desktop: 8}}>
                    <Columns.Column mobile={{size: 12}} desktop={{size: 12}}  tablet={{size:12}}>
                        <Heading className="has-text-centered" >Componentes de Samir System</Heading>
                        <p className="has-text-justified">Samir® System es un software o programa de Facturación y contabilidad que incluye la Gestión financiera, administrativa, comercial, 
                        productiva y operativa, que crece constantemente con la ayuda de sus clientes y ha sido basado en modelos de calidad, para ofrecer lo mejor a nuestros exitosos clientes.</p>
                    </Columns.Column>
                </Columns>
                <Columns breakpoint="mobile" className="is-vcentered column_card" variableGap={{mobile: 1, desktop: 8}} >
                    <Columns.Column mobile={{size: 12}} desktop={{size: 12}}  tablet={{size:12}}>
                        <Tile kind="ancestor">
                            <Tile size={12}  className="tile_padre" >
                            
                                <Tile kind="parent" vertical className="contenedor_padre">
                                    <Tile kind="child" >
                                        {/* <Image/> */}
                                        {/* <FontAwesomeIcon icon={faLaptop} className="icon-font" /> */}
                                        <img src={require("../../media/design_1.svg")} alt="design_1" ></img>
                                        <Heading className="has-text-centered" >Diseño Adaptable</Heading>
                                        <p className="has-text-justified p_catacteristica">
                                            Samir® System, totalmente adaptable a su negocio de bienes o servicios, 
                                            facilita sus procesos en Farmacias, Ferreterias, Comisariatos, Comerciales, 
                                            Autoservicios y Otros.
                                        </p>
                                    </Tile>
                                </Tile>
                             
                                <Tile kind="parent" vertical className="contenedor_padre">
                                    <Tile kind="child" >
                                        <img src={require("../../media/design_2.svg")} alt="design_2" ></img>
                                        <Heading className="has-text-centered">Eficáz y Rápido</Heading>
                                        <Content className="content">
                                            <p className="has-text-justified p_catacteristica">
                                                Samir® System, le ayuda a mantener el control total de sus actividades comerciales
                                                y todo en tiempo real. Ágilize su atención al cliente, facilitece los reportes mensuales 
                                                y declaración de servicios.
                                            </p>
                                        </Content>
                                    </Tile>
                                </Tile>
                                <Tile kind="parent" vertical className="contenedor_padre">
                                    <Tile kind="child" >
                                    <img src={require("../../media/design_3.svg")} alt="design_3" ></img>
                                        <Heading className="has-text-centered">Robusto</Heading>
                                        <Content className="content">
                                            <p className="has-text-justified p_catacteristica">
                                            Ya son 5 años de venta en el mercado, que hacen de Samir® un software sustentable, fiable, seguro y
                                             con respaldos automáticos en servidores en la Nube disponibles 24/7.
                                            </p>
                                        </Content>
                                    </Tile>
                                </Tile>
                                <Tile kind="parent" vertical className="contenedor_padre">
                                    <Tile  kind="child" color="primary">
                                    <img src={require("../../media/design_4.svg")} alt="design_4" ></img>
                                    <Heading className="has-text-centered">Soporte</Heading>
                                        <Content className="content">
                                            <p className="has-text-justified p_catacteristica">
                                            Videos Tutoriales y soporte técnico en linea 
                                            con asistencia remota los 7 días de la semana Online. Se incluyen capacitaciones Gratuitas!
                                            </p>
                                        </Content>
                                    </Tile>
                                </Tile>
                            </Tile>
                        </Tile>
                    </Columns.Column>
                </Columns>
                <Columns breakpoint="mobile" className="is-vcentered column_2" variableGap={{mobile: 3, desktop: 8}}>
                    <Columns.Column className="col2_content" mobile={{size: 12}} desktop={{size: 7}}  tablet={{size:7}}>
                        <Heading size={4} className="has-text-centered" >ALGUNAS CARACTERÍSTICAS DE SAMIR SYSTEM 5.1.6.4+</Heading>
                        <p className="has-text-centered">
                            Samir® System, fue desarrollado para entornos <br/>
                            Multi-Empresariales y Multi-Plataforma.
                        </p>
                        <Content className="list_li">
                            <p><FontAwesomeIcon icon={faCheckCircle} />Ideal para PYMES, Distribuidoras y Productoras.</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Notificaciones Dinámicas.</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Control de Stock y Caducidad</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Previsualizador de Documentos</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Registro de Logs para Auditoría</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Automatización de documentos de Negocio.</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Compatible con Ticketeras e Impresoras.</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Soporte 7 días en la semana de por vida.</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Actualizaciones Automáticas Online.</p>
                            <p><FontAwesomeIcon icon={faCheckCircle} />Respaldos Automáticos 24/7 (Cloud Server).</p>
                        </Content>
                    </Columns.Column>
                    <Columns.Column className="feature_contenedor" mobile={{size: 12}} desktop={{size: 5}}  tablet={{size:5}}>
                        <Image src={require("../../media/samir.webp")} />
                    </Columns.Column>

                </Columns>
                </Section>
    );
}

export default Design;