
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import google from '../../src/assets/img/google.jpeg'
import wordpress from '../../src/assets/img/wordpress.jpeg'
import odoo from '../../src/assets/img/odoo.jpeg'
import dev from '../../src/assets/img/dev.png'
import office from '../../src/assets/img/office.jpeg'
import git from '../../src/assets/img/git.png'
import extras from '../../src/assets/img/extras.png'


export const Conocimientos = () => {

    return (
        <>
            <NavbarCv claseConoc={'titulos-cv-style-conoc'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard title={'Desarrollo web'} url={"Múltiples lenguajes"} urlTitle={"Fullstack Developer"} img={dev} description={"Me encanta el desarrollo web, tanto del front como del backend, por lo que dediqué tiempo a formarme en los siguientes lenguajes y tecnologías: HTML, CSS, Bootstrap, Tailwind, C, C#, C++, Javascript, React.js, Python, APIs, SCRUM, MySql."} />

                    <InfoCard title={'Git - Github'} url={"Manejo de versiones"} urlTitle={"Git"} img={git} description={"Durante mi cursada en la universidad, y en la mayoría de los proyectos en los que he trabajado, se utilizó Github como versionador de cabecera, lo cual me supo brindar un conocimiento amplio de las distintas herramientas que se ofrecen en el mercado respecto a este punto."} />

                    <InfoCard title={'Paquete Office'} url={"Microsoft Office"} urlTitle={"Herramientas de trabajo"} img={office} description={"Tengo los conocimientos fundamentales para trabajar con los programas que integran este paquete, principalmente Word, Excel y PowerPoint."} />

                    <InfoCard title={'Conocimientos extras'} url={"Conocimientos adicionales"} urlTitle={"Es bueno saber"} img={extras} description={"Detallo aquí otros conocimientos que tengo: Metedologías ágiles, Terminal / Consola, Postman, Slack, Jira, Notion, Figma, Draw.io, Excalidraw, SEO, Netlify."} />

                </div>
            </div>
            <FooterCv />
        </>
    )
}
