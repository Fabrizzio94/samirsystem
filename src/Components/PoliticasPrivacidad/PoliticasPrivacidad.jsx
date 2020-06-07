import React from 'react';
import './PoliticasPrivacidad.css';
import { NavLink } from 'react-router-dom';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Tag from 'react-bulma-components/lib/components/tag';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Notification from 'react-bulma-components/lib/components/notification';


const PoliticasPrivacidad = () => {
    return(
        <section className="politica_section">
            <Container>
                <Columns breakpoint="mobile" className="is-vcentered" variableGap={{mobile: 3, desktop: 8}}>
                    <Columns.Column mobile={{size: 12}} desktop={{size: 12}}  tablet={{size:12}}>
                        <Heading className="is-uppercase">POLITICAS DE PRIVACIDAD de ExcellentSoft™</Heading>
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
                        <hr />
                        <Heading size={5} className="is-uppercase" >política de privacidad</Heading>
                        <Content className="has-text-justified" >
                            <p>
                                Cuando usted nos facilita información de carácter personal a través del sitio web <strong>ExcellentSot™</strong> (en adelante, el “Sitio Web”), respeta su intimidad y los derechos que le reconoce la normativa sobre protección de datos de carácter personal.
                                Por ello, es importante que entienda que información recabamos acerca de usted durante su visita y qué hacemos con dicha información. Su visita al Sitio Web está sujeta a la presente Política sobre Tratamiento de Datos Personales.
                                No comunicaremos a terceros su información de carácter personal, salvo en la forma establecida en esta Política sobre Privacidad y Tratamiento de Datos o en los avisos establecidos para cada supuesto en que se recojan sus datos personales.
                            </p>
                            <Notification className="bg-alert" color="warning">
                                <strong>ExcellentSot™</strong> No recabara información personal acerca de usted a menos que tenga como mínimo trece (13) años. Si fuera menor de dicha edad, deberá abstenerse.
                            </Notification>
                            <em >
                                Para las definiciones usadas en la presente Política de Privacidad, consulte nuestros
                                <NavLink className="privacidadComponetanchor" exact to="/terminos"> Términos y Condiciones</NavLink>. Le rogamos que, antes de que empiece a navegar por las plataformas digitales de <strong>ExcellentSot™</strong>, lea la siguiente información para conocer nuestra política de privacidad y la forma en la que utilizaremos sus datos.
                            </em>
                            
                        </Content>
                        <hr />
                        <Heading size={5} className="is-uppercase subtitle_privacidad">recopilación y uso de la información</Heading>
                        <Content className="has-text-justified">
                            <strong>ExcellentSot™</strong> recaba información principalmente para suministrar y mejorar las plataformas digitales de <strong>ExcellentSot™</strong>, para crear un perfil de usuario, para los servicios o el contenido y los Test y/o Artículos, para administrar su pertenencia a ellas y hacer posible que los usuarios disfruten y naveguen fácilmente por las plataformas digitales de <strong>ExcellentSot™</strong>.
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">la información que recabamos de usted</Heading>
                        <Content className="has-text-justified">
                            <p><strong>ExcellentSoft™</strong> recabará sus datos de identificación personal cuando se registre para abrir una cuenta o cuando se inscriba en alguna transacción, promoción o concurso. 
                                Los datos de identificación personal recopilados incluirán, entre otros: la dirección de correo electrónico, los apellidos, el nombre de pila, el país de residencia, la fecha de nacimiento, su sexo, su nombre de identificación en pantalla, su contraseña, la opción de participación en juegos y preferencias sobre los contenidos de <strong>ExcellentSot™</strong>.
                            </p>
                            <p>
                                <strong>Desde Facebook y/o Twitter.-</strong> De igual modo, puedes darnos permiso para acceder a tu información en otros servicios. Por ejemplo, quizá vincules tu cuenta de Facebook o Twitter a <strong>ExcellentSot™</strong>, 
                                lo que nos permitiría obtener información de esas cuentas (como tus amigos o contactos, tu correo, tu nombres y demás datos públicos). La información que obtenemos de esos servicios normalmente depende de la configuración que hayas definido o de sus propias políticas de privacidad, de modo que te recomendamos que las conozcas 
                                en <a className="privacidadComponetanchor" href="https://www.facebook.com/policies/" target={"_blank"} rel="noopener noreferrer">Politicas de Facebook®</a> | <a className="privacidadComponetanchor" href="https://twitter.com/privacy?lang=es" target={"_blank"} rel="noopener noreferrer">Politicas de Twitter®</a>
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">cookies</Heading>
                        <Content className="has-text-justified">
                            <p>Cuando usted visita las plataformas digitales de <strong>ExcellentSot™</strong>, usamos “cookies” para recabar información. Las cookies son pequeños archivos de datos que se transfieren al disco duro de un ordenador para que éste recuerde información como las ID de registro 
                                y las contraseñas. La cookie suele incluir el nombre del dominio de la página que la creó, su propia duración y una serie de valores.
                            </p>
                            <p>También utilizamos cookies de ID de sesión que activan ciertas características de las plataformas digitales de <strong>ExcellentSot™</strong>, 
                                con el objetivo de que nos permitan comprender cómo interacciona usted con las plataformas digitales en www.excellentsoft.net y controlar el uso agregado que efectúan los usuarios de <strong>ExcellentSot™</strong> y las rutas que sigue el tráfico. Las cookies de ID de sesión, 
                                al contrario que las cookies permanentes, se eliminan de su ordenador cuando usted finaliza sesión en las plataformas digitales de <strong>ExcellentSot™</strong> al cerrar el navegador o cerrar sesión.
                            </p>
                            <p>Tenga en cuenta que puede bloquear las cookies con sólo actualizar la configuración de privacidad en el navegador de Internet.</p>
                            <p>
                                Para saber cómo activar y desactivar las cookies, vaya al menú "Ayuda" de la barra de menú de su navegador y haga una búsqueda con el término "cookies". No obstante, si bloquea las cookies, no podrá hacer uso de todas las secciones de las plataformas digitales de <strong>ExcellentSot™</strong> ni de todas sus funciones de los servicios.
                            </p>
                            <Notification className="bg-alert" color="warning">
                                Es posible que también otras terceras partes que anuncian sus productos en las plataformas digitales de <strong>ExcellentSot™</strong> configuren o usen cookies para acceder a su ordenador. Le rogamos que consulte los sitios web específicos de cada tercera parte y sus condiciones de privacidad para conocer sus procedimientos para la recopilación, 
                                uso y revelación de la información personal a través de sus cookies.
                                <a className="privacidadComponetanchor" href="http://www.google.es/policies/privacy/ads/#toc-doubleclick" target={"_blank"} rel="noopener noreferrer"> Google policies ads#toc-doubleclick</a> y a <a className="privacidadComponetanchor" href="http://www.google.es/policies/privacy/ads/" target={"_blank"} rel="noopener noreferrer">Google.es privacy ads</a>.
                            </Notification>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">información automática</Heading>
                        <Content className="has-text-justified">
                            <p>
                                <strong>ExcellentSot™</strong> recaba automáticamente información acerca de su ordenador siempre que usted visita las plataformas digitales de <strong>ExcellentSot™</strong>, 
                                independientemente de que esté registrado en una cuenta o no, por el solo hecho de navegar por nuestros servicios. Por ejemplo, <strong>www.excellentsoft.net</strong> recabará su dirección IP, 
                                el software del navegador de Internet y el correspondiente sitio web. Estos datos ayudan a personalizar la experiencia del usuario, y a controlar y analizar el uso que usted hace de las plataformas digitales de <strong>ExcellentSot™</strong> y de los servicios. 
                                La información se emplea también para la gestión técnica y para la optimización de la facilidad de uso y funcionalidades de las plataformas digitales de <strong>ExcellentSot™</strong>.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">uso de la información</Heading>
                        <Content className="has-text-justified">
                            <p>Utilizamos los demás datos que poseemos sobre usted para los siguientes propósitos generales: para proporcionarle servicios que haya solicitado; 
                                para gestionar su cuenta; para comunicarnos en general con usted; para responder a sus preguntas y comentarios; para notificarle las ofertas especiales que puedan interesarle; 
                                para impedir actividades posiblemente prohibidas o ilegales; para hacer respetar nuestras Condiciones del Servicio, que podrá encontrar en 
                                <a className="privacidadComponetanchor" href="https://www.excellentsoft.net/legal/terms"> https://www.excellentsoft.net/legal/terms</a> y para las demás finalidades que encontrará descritas en el momento de recabar la información.
                            </p>
                            <p></p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">phishing</Heading>
                        <Content className="has-text-justified">
                            <p>
                                A <strong>ExcellentSot™</strong> le preocupan enormemente el robo de la identidad y la práctica habitualmente conocida como “phishing”. Nuestra principal prioridad consiste en proteger la información para protegerle a usted de la usurpación de la identidad. 
                                Nunca le pedimos ni le pediremos información sobre su tarjeta de crédito, la ID de su cuenta, su contraseña de inicio de sesión ni su número de identidad nacional en una comunicación telefónica sin seguridad o en un correo electrónico no solicitado.
                            </p>
                            <p>
                                Revelación de información e información compartida <strong>ExcellentSot™</strong> enviará sus datos de identificación personal a terceras partes en los siguientes supuestos:
                            </p>
                            <ol>
                                <li>Para responder a citaciones, órdenes o procedimiento judiciales;</li>
                                <li>Si lo consideramos necesario, a nuestra total discreción, con objeto de investigar, evitar o interponer demandas contra actividades ilegales, supuestos fraudes, situaciones de emergencia que amenacen la seguridad física de alguna persona, o que supongan un incumplimiento de nuestros Términos y Condiciones, 
                                    ubicados en <a className="privacidadComponetanchor" href="https://www.excellentsoft.net/legal/terminos">https://www.excellentsoft.net/legal/terminos</a>, o según lo determine la ley.
                                </li>
                            </ol>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">seguridad</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Deseamos que se sienta seguro cuando use las plataformas digitales de <strong>ExcellentSot™</strong>. Por esta razón, hemos puesto en marcha medidas técnicas y organizativas razonables, orientadas a proteger su información personal de pérdidas accidentales y de accesos, usos, modificaciones o revelaciones no autorizados. Sin embargo, Internet es un sistema abierto y no siempre podemos impedir que terceros no autorizados consigan burlar esas medidas o usar sus datos personales para usos indebidos.
                            </p>
                            <p>
                                Si piensa comunicarse con <strong>ExcellentSot™</strong> mediante correo electrónico, debe saber que la privacidad de este medio es incierta. Si envía mensajes de correo electrónico con información delicada o confidencial sin cifrarla, correrá el riesgo de ser víctima de tal inseguridad y de perder la confidencialidad de dicha información en Internet.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">su derecho de acceso a la información</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Tiene derecho a consultar la información que poseemos sobre usted. Si desea hacerlo, sirvace a enviar un mensaje a nuestro email de soporte: <strong>support@excellentsoft.net</strong>. Para proporcionarle una copia de la información que tenemos archivada sobre usted, le solicitaremos que acredite su identidad.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">actualización/eliminación de su información</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Podrá consultar, corregir, actualizar, cambiar o eliminar su información personal en cualquier momento. Para ello tan sólo tiene que acceder a su cuenta en las plataformas digitales de <strong>ExcellentSot™</strong>.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">vínculos a otros sitios web</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Si cualquier parte de las plataformas digitales de <strong>ExcellentSot™</strong> contiene vínculos a otros sitios web, dichos sitios no operan bajo la presente política de privacidad. Si decide visitar a un anunciante o hacer clic en un vínculo a otra tercera parte, se le dirigirá al sitio web de dicha tercera parte. 
                                Nosotros no ejercemos control alguno sobre los sitios webs de terceras partes y, por lo tanto, le recomendamos que consulte las declaraciones sobre privacidad que publican dichos sitios web para enterarse de los procedimientos que siguen a la hora de recabar, usar y revelar datos personales.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">nuestra política con los niños</Heading>
                        <Content className="has-text-justified">
                            <p>
                                No recabamos a propósito información de identificación personal de los niños menores de 13 años. Si un padre o tutor legal se entera de que su hijo menor de 13 años, o pupilo menor de 13 años, nos ha suministrado información personal sin su consentimiento, deberá eliminar la cuenta (consulte: Actualización/eliminación de su información). 
                                Si nos enteramos de que un niño menor de 13 años nos ha suministrado información personal sin dicho consentimiento, eliminaremos tal información de nuestros archivos.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">cambios en la presente política de privacidad</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Es posible que esta política de privacidad se modifique de vez en cuando. Si la modificáramos, en el sitio web de <strong>ExcellentSot™</strong> publicaríamos la versión actualizada de esta página. Además, 
                                el sitio web de <strong>ExcellentSot™</strong> y/o la aplicación de <strong>ExcellentSot™</strong> podrían notificar los cambios efectuados en esta política de privacidad u otros asuntos mediante avisos o vínculos a avisos generalmente en las plataformas digitales de <strong>ExcellentSot™</strong>.
                            </p>
                        </Content>
                        <Heading size={5} className="is-uppercase subtitle_privacidad">jurisdicción y legislación aplicable</Heading>
                        <Content className="has-text-justified">
                            <p>
                                Esta política de privacidad y todas las cuestiones que surjan de ella o estén relacionadas con ella se regirán por las leyes materiales de Ecuador, sin tomar en consideración las normas de conflicto de leyes que de ellas se deriven.
                            </p>
                            <Notification className="bg-success" >
                                Fecha de Actualización de la presente política de privacidad: <strong style={{color:'green'}}>02 Abril 2017</strong>.<br/>
                                En caso de que las politicas sean actualizadas serán notificadas en la página de inicio.
                            </Notification>
                        </Content>
                    </Columns.Column>
                </Columns>
            </Container>
        </section>
    )
}

export default PoliticasPrivacidad;
