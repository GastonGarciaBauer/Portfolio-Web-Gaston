
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import utn from '../../src/assets/img/utn.png'
import talentotech from '../../src/assets/img/talento-tech.png'
import cuvl from '../../src/assets/img/cuvl.jpeg'
import dalto from '../../src/assets/img/dalto.png'
import midu from '../../src/assets/img/midu.png'
import fcc from '../../src/assets/img/fcc.jpeg'
import udemy from '../../src/assets/img/udemy.jpeg'
import vba from '../../src/assets/img/vba.png'
import unr from '../../src/assets/img/unr.jpeg'


export const Educacion = () => {

    return (
        <>
            <NavbarCv claseEdu={'titulos-cv-style-edu'}/>
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard title={'Tecnicatura Universitaria en Programación'} url={"2022 - 2024"} urlTitle={"Universidad Tecnológica Nacional"} img={utn} description={"La mejor decisión que pude haber tomado es estudiar lo que estudié. Me formé para adentrarme en un mundo apasionante y en constante evolución. Aprendí las bases de las tecnologías, sistemas y computadoras para en los siguientes años, poner todo ello en práctica. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'Desarrollo Web Full-Stack'} url={"2021"} urlTitle={"Talento-Tech (ex Fundación Codo a Codo)"} img={talentotech} description={"Curso de 6 meses, online sincrónico, con conceptos de front y back nivel básico y certificado que entregaba la institución. Preparados para salir al mundo laboral como programadores, dándonos los conceptos fundamentales y la lógica del desarrollo web. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'QA Testing'} url={"2021"} urlTitle={"Centro Universitario Vicente López - Fundación PROEM"} img={cuvl} description={"Curso completo sobre el testing de software. Tocando las tecnologías prinicipales tales como Jira, Postman, Apache JMeter, Git, entre otras. Los requisitos de cada tipo de software y sus pruebas funcionales, no funcionales, unitarias y de integración. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'Javascript'} url={"2024"} urlTitle={"freeCodeCamp"} img={fcc} description={"Curso inicial de Javascript, repasando los fundamentos de este lenguaje y realizando algunos proyectos prácticos que pueden encontrar en mi Github. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'Bootstrap'} url={"2024"} urlTitle={"freeCodeCamp"} img={fcc} description={"Curso sobre este framework para estilizar y crear sitios webs responsivos de una forma rápida y sencilla. Una tecnología que aplico a todos mis proyectos y que me encanta por todas las herramientas que ofrece. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'React'} url={"2024"} urlTitle={"MiduDev"} img={midu} description={"Curso inicial de React, repasando los aspectos principales de esta librería y realizando algunos proyectos prácticos que pueden encontrar en mi Github. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'Javascript - Nivel 1'} url={"2021"} urlTitle={"Soy Dalto"} img={dalto} description={"Curso inicial de Javascript, repasando los fundamentos de este lenguaje y realizando algunos proyectos prácticos que pueden encontrar en mi Github. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'HTML5 - CSS3'} url={"2021"} urlTitle={"Soy Dalto"} img={dalto} description={"Curso completo donde se repasa en detalle cada una de las características de HTML y CSS. se hace incapié en el uso de todas las etiquetas y todos los estilos que pueden combinarse entre estos dos 'lenguajes' para crear sitios web atractivos y potentes. (Ubicación: Buenos Aires, Argentina)"}/>

                    <InfoCard title={'VBA Excel'} url={"2022"} urlTitle={"Laboratorio de Computación"} img={vba} description={"Curso a cargo de la Lic. en Sistemas Vilma Giudice para no perder de vista los usos básicos y fundamentales de esta herramienta tan potente como es Excel, haciendo énfasis en su lenguaje de programación Visual Basic for Applications.  (Ubicación: Buenos Aires, Argentina)"}/>
                </div>
            </div>
            <FooterCv />
        </>
    )
}
