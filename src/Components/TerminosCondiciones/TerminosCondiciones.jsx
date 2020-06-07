import React from 'react';
import './TerminosCondiciones.css';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Tag from 'react-bulma-components/lib/components/tag';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Notification from 'react-bulma-components/lib/components/notification';
const TerminosCondiciones = () => {
    return(
        <section className="terminos_section">
            <Container>
                <Columns breakpoint="mobile" className="is-vcentered" variableGap={{mobile: 3, desktop: 8}}>
                    <Columns.Column mobile={{size: 12}} desktop={{size: 12}}  tablet={{size:12}}>
                        <Heading className="is-uppercase">términos y condiciones de ExcellentSoft™</Heading>
                        <Tag className="tag_privacidad" color="dark" size={'medium'} >#Privacidad</Tag>
                        <Tag className="tag_privacidad" color="dark" size={'medium'} >#Legal</Tag>
                        <Heading size={5}>EXCELLENTSOFT™ & ACCOUNTING | DATOS DEL TITULAR</Heading>
                        <Content className="contenedor_politicas">
                            <ul className="list_politicas">
                                <li><strong>Titular:</strong> Grupo de Desarrollo de Software "ExcellentSoft™".</li>
                                <li><strong>Extensiones:</strong> Machala, Huaquillas, Ponce Enríquez, La Troncal, El Guabo, Guayaquil, Cuenca</li>
                                <li><strong>Correo electrónico:</strong> info@excellentsoft.net | excellentsoft.net@gmail.com</li>
                                <li><strong>CEO:</strong> Ing. Sist. J. Adrián Sánchez C. (Fundador), Ing. Cont Yanela V. Sánchez C. (Fundadora), Lester O. Sumba (Dpt. Ventas).</li>
                                <li><strong>Servicios y Aplicaciones:</strong> Desarrollo de Software, Alojamiento Hosting Privado, Diseño Gráfico, Marketing Online.</li>
                                
                            </ul>
                            
                        </Content>
                        <hr/>
                        <Heading size={5} className="is-uppercase" >términos y condiciones</Heading>
                        <Notification className="bg-success">
                            Fecha de Actualización de los presentes Términos y Condiciones: <strong>25 de Diciembre 2018</strong>.
                        </Notification>
                        <Heading size={5} className="is-uppercase" >1. la admisión por los usuarios</Heading>
                        <Content className="has-text-justified">
                            <p>
                                ExcellentSoft™, requiere que el usuario, acepte y cumpla los términos aquí expresados como condición previa y necesaria para el acceso, y utilización de los servicios y/o contenidos brindados por el Sitio.
                                Cuando un usuario accediere al Sitio y utilizare cualquiera de los servicios, Aplicaciones y/o contenidos existentes, hará presumir el conocimiento del presente texto y que ha manifestado su plena aceptación con respecto a todas y cada una de las disposiciones que lo integran.
                            </p>
                            <Notification className="terminos_bg-alert">
                                El usuario que no acepte, se halle en desacuerdo, o incurriere en incumplimiento de las disposiciones fijadas por las plataformas digitales de <strong>ExcellentSoft™</strong> en estas Condiciones Generales, no contará con autorización para el uso de los servicios y contenidos que existen o puedan existir en el Sitio, absteniéndose de ingresar nuevamente al mismo.
                            </Notification>
                        </Content>
                        <Heading size={5} className="is-uppercase" >2. capacidad legal de visitantes</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Solo podrán acceder y utilizar los servicios y/o contenidos de <strong>www.excellentsoft.net</strong>, quienes a acepten la legislación vigente. Quienes a tenor de la legislación vigente no posean tal capacidad para 
                                acceder u obligarse válidamente a los términos y condiciones aquí establecidos, deberán obtener inexcusablemente autorización previa de sus representantes legales, quienes serán considerados responsables de todos los actos realizados por los incapaces a su cargo.
                            </p>
                            <Notification className="terminos_bg-alert">
                                Cuando se trate de falta de capacidad por minoría de edad, la responsabilidad en la determinación de los servicios y 
                                contenidos a los que acceden los menores de edad corresponde a los mayores a cuyo cargo se encuentren, sin embargo en ningún caso estará permitido el acceso al sitio por parte de menores de 13 años de edad.
                            </Notification>
                        </Content>
                        <Heading size={5} className="is-uppercase" >3. registros de usuarios</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Para valerse de los servicios prestados en <strong>www.excellentsoft.net</strong>, basta la sola aceptación de estas Condiciones Generales. Sin embargo para la utilización de algunos servicios o el acceso a ciertos contenidos, 
                                podrá establecerse como requisito, el previo registro del usuario. Dicho registro tendrá por finalidad establecer la identidad e información de contacto del usuario.
                            </p>
                            <p>
                                Toda vez que para la registración de un usuario le sea requerida información, la misma deberá ser válida, y poseerá el carácter de declaración certificada, 
                                siendo responsable por todos los perjuicios que derivaren para <strong>ExcellentSoft™</strong> o terceros como consecuencia de tal falta de veracidad o exactitud.
                            </p>
                            <p>
                                El usuario dispondrá, una vez registrado, de un nombre de usuario y una contraseña que le permitirá el acceso personalizado, confidencial y seguro a su cuenta personal dentro del Sitio. Los servicios sujetos a registración han sido concebidos para el uso personal del usuario requirente, 
                                por tanto el nombre de usuario y la contraseña de acceso concedidos por <strong>ExcellentSoft™</strong> solo podrán ser usados por este, estando prohibida su utilización por otra persona distinta al mismo.
                            </p>
                            <p>
                                <strong>ExcellentSoft™</strong> podrá rechazar cualquier solicitud de registración o, cancelar una registración previamente aceptada, sin que tal decisión deba ser justificada, y sin que ello genere derecho alguno en beneficio del Usuario.
                            </p>
                            <p>
                                <strong>ExcellentSoft™</strong> utilizará la información suministrada por el usuario exclusivamente con el objeto expuesto en las <a href="/politca"> Políticas de Privacidad</a>.
                            </p>
                            <p>
                                Pero atento que <strong>ExcellentSoft™</strong> pone en conocimiento de los usuarios que www.excellentsoft.net no garantiza la inviolabilidad de sus sistemas, motivo por el cual los usuarios deberán tomar en consideración esta circunstancia al momento de decidir su registración.
                            </p>
                            <p>
                                En todos los casos, y de acuerdo con la Política de Privacidad sostenida por <strong>ExcellentSoft™</strong>, la información de carácter personal suministrada por los Usuarios será objeto de adecuado tratamiento y preservación, en resguardo de la privacidad de la misma. Los usuarios que no deseen que su fotografía o imagen, 
                                o descripción personal ingresadas en el Sitio, puedan ser brindadas al público no deberán registrarse en <strong>www.excellentsoft.net</strong>.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase" >4. notificaciones y comunicaciones</Heading>
                        <Content className="has-text-justified">
                            <p>
                                A los fines que los usuarios puedan tomar contacto con <strong>ExcellentSoft™</strong>, se considerarán válidas las comunicaciones dirigidas a: <strong>support@excellentsoft.net</strong>.
                            </p>
                            <p>
                                Las notificaciones y comunicaciones cursadas por <strong>ExcellentSoft™</strong> a la casilla de correo electrónico que surja como dirección de correo del usuario o remitente se considerarán eficaces y plenamente válidas. Asimismo se considerarán eficaces las comunicaciones que consistan en avisos y mensajes insertos en el sitio, o que se envíen durante la prestación de un servicio, 
                                que tengan por finalidad informar a los usuarios sobre determinada circunstancia.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase" >5. acceso libre a los servicios y aplicaciones</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Más allá de la obligación de cumplimiento de todas y cada una de estas Condiciones Generales, todos los servicios y contenidos ofrecidos en el Sitio son libremente accesibles por parte de los usuarios. La libre accesibilidad incluye la gratuidad de los servicios, que no estarán sujetos al pago de ningún arancel o retribución hacia <strong>ExcellentSoft™</strong>.
                            </p>
                            <p>
                                Tal gratuidad no es de aplicación sobre los servicios de terceros brindados a través del sitio que podrán no ser gratuitos, y en igual sentido aquellos servicios y/o contenidos, actuales o futuros sobre los que <strong>ExcellentSoft™</strong> decida establecer un canon para su utilización por parte de los usuarios.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase" >6. de los servicios y contenidos en particular</Heading>
                        <Content className="has-text-justified">
                            <p>
                                <strong>ExcellentSoft™</strong> es grupo de desarrollo que brinda servicios en Internet basados en una herramienta de comunicación, que permiten poner en contacto a sus usuarios para que los mismos compartan opiniones, comentarios, y en general cualquier tipo de información que sea de su interés. El objetivo de www.excellentsoft.net es la creación de un ámbito de comunicación y esparcimiento tan amplio como sea posible, destinado al público de Internet en general.
                            </p>
                            <Notification className="bg-success">
                                Fecha de Actualización de la presente política de privacidad: <strong>25 de Diciembre 2018</strong>.<br/>
                                En caso de que las politicas sean actualizadas serán notificadas en la pagina de inicio.
                            </Notification>
                        </Content>
                    </Columns.Column>
                </Columns>
            </Container>
        </section>
    )
}

export default TerminosCondiciones;