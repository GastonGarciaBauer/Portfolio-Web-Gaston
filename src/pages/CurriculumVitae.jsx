import { useState, useEffect } from "react";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import gaston from '../../src/assets/img/gaston.jpeg'
import linkedin from '../../src/assets/img/linkedin.webp'
import github from '../../src/assets/img/github.svg'
import maletin from '../../src/assets/img/maletin.png'
import estudios from '../../src/assets/img/estudios.png'
import conocimiento from '../../src/assets/img/conocimiento.png'
import proyectos from '../../src/assets/img/proyectos.png'
import { FooterCv } from "../components/FooterCv/FooterCv";
import { PersonalCard } from "../components/PersonalCard/PersonalCard";

export const CurriculumVitae = () => {

    return (
        <>
            <NavbarCv claseTodo={'titulos-cv-style-todo'} />
            <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-lg-6">
                    <InfoCard title={"Quién soy - Gastón García Bauer"} url={"https://www.gastongarciabauer.netlify.app"} urlTitle={"Quién soy"} img={gaston} description={"Te cuento brevemente quién soy y cuáles son mis intereses principales. Te recomiendo primero visitar esta sección para que sepas quién está detrás de todo lo que vas a leer."} LinkTo={'/quien-soy'} />
                    <InfoCard title={"Experiencia - Empleos"} url={"https://www.gastongarciabauer.netlify.app"} urlTitle={"Experiencia"} img={maletin} description={"Aunque cuento con una mínima y muy corta experiencia laboral, durante mi formación académica he adquirido un conocimiento sólido en tecnologías usadas y demandadas actualmente por el mercado. Además, he trabajado en varios proyectos [académicos, personales y voluntarios] que me han permitido aplicar estos conocimientos en situaciones prácticas."} LinkTo={'/experiencia'}/>
                    <InfoCard title={"Educación - Cursos"} url={"https://www.gastongarciabauer.netlify.app"} urlTitle={"Educación"} img={estudios} description={"Me encanta estudiar y seguir aprendiendo cosas nuevas todos los días. En esta sección te cuento todo lo que aprendí y estudié a lo largo de mi carrera profesional. Títulos universitarios, cursos y bootcamps."} LinkTo={'/educacion'} />
                    <InfoCard title={"Conocimientos - Aptitudes"} url={"https://www.gastongarciabauer.netlify.app"} urlTitle={"Conocimientos y Aptitudes"} img={conocimiento} description={"El estudio y el aprendizaje continuo me han dado la oportunidad de desarrollar muchas habilidades, herramientas y programas que son de gran utilidad en el mundo actual. Te cuento todo lo que sé usar en esta sección."} LinkTo={'/conocimientos'}/>
                    <InfoCard title={"Proyectos"} url={"https://www.gastongarciabauer.netlify.app"} urlTitle={"Proyectos"} img={proyectos} description={"Para aprender hay que hacer, y así hice durante mi etapa de estudio y aprendizaje. Te muestro todos los proyectos que fui desarrollando a lo largo de mi crecimiento como programador. Algunos más simples, otros más complejos, pero todos hechos con dedicación y cariño."} LinkTo={'/proyectos'}/>
                    <InfoCard title={"Gastón García Bauer - Linkedin"} LinkTo={"https://www.linkedin.com/in/gaston-garcia-bauer"} url={"https://www.linkedin.com/in/gaston-garcia-bauer"} urlTitle={"Linkedin"} img={linkedin} description={"En Linkedin podrás encontrar, además de todo mi curriculum, las publicaciones que voy haciendo regularmente comentando mis progresos, proyectos y novedades. No dejes de visitar mi perfil!"}/>
                    <InfoCard title={"Gastón García Bauer - Github"} LinkTo={"https://github.com/GastonGarciaBauer"} url={"https://github.com/GastonGarciaBauer"} urlTitle={"Github"} img={github} description={"En Github encontrarás todos mis proyectos, divididos en repositorios y en cada uno, carpetas y archivos que fueron utilizados para desarrollarlos. Te invito a revisarlos."} />
                </div>
                <div className="col-12 col-lg-3 mt-4">
                    <PersonalCard LinkTo={"/quien-soy"}/>
                </div>
            </div>
            <FooterCv />
        </>
    )
}

