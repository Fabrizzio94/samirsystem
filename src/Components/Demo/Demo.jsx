import React from 'react';

import './Demo.css';
import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
const Demo = () => {
    return(
        <Section id={'demoSection'} className="demo_section">
            <Columns breakpoint="mobile" className="is-vcentered" variableGap={{mobile: 3, desktop: 8}}>
                <Columns.Column mobile={{size: 12}} desktop={{size: 6}}  tablet={{size:6}}>
                    <Content className="contenedor_demo" >
                        <Heading className="has-text-centered" >Accede a un Demo de Samir® System</Heading>
                        <p className="has-text-justified demo_description"> 
                            Hemos trabajado con muchas empresas y comprendemos la necesidad de ver el producto antes de adquirirlo, por eso, 
                            somos los primeros en ofrecerle una Demostración Guíada, mediante Acceso Remoto con la herramienta (Teamweaver), 
                            donde podrá explorar y usar nuestro sistema "Samir® System" (Demo), mientras uno de nuestros asistentes responde a todas sus inquietudes durante 15min.                    
                        </p>
                        <h6 className="has-text-justified"><strong>Nota: </strong> Se requiere tener instalado Teamweaver®. Solicite una sesión guíada en el formulario de solicitud y espere un correo de confirmación.
                        </h6>
                        <div className="demo_btn-wrapper">
                            <Button className="soli_demo" ><FontAwesomeIcon icon={faPaperPlane}/> Solicitar Demo </Button>
                            <Button className="btn_tvr"><FontAwesomeIcon icon={faDownload}/> Descargar TeamViewer 13</Button>
                        </div>
                    </Content>

                </Columns.Column>
                <Columns.Column mobile={{size: 12}} desktop={{size: 6}} tablet={{size: 6}} className="col_video" >
                    <ReactPlayer url="https://youtu.be/vBkHoZe-WFY" className="player" width="100%" />
                </Columns.Column>
            </Columns>
        </Section>
    )
}


export default Demo;