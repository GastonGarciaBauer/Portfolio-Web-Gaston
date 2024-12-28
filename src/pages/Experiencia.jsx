
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import potion from '../../src/assets/img/potion.png'


export const Experiencia = () => {

    return (
        <>
            <NavbarCv claseExp={'titulos-cv-style-exp'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                
                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://www.linkedin.com/company/nanobytes-odoo-erp-gold-partner/'> CEO - Data Engineer Trainee</a></>)} url={"AWS, Python, Pandas"} urlTitle={"Potion"} img={potion} description={"Mi camino como programador comienza aquí. Potion fue un proyecto tipo Start-Up creado y llevado adelante en conjunto con dos socios amigos durante un período tiempo de alrededor de 5 meses. Si bien el tiempo de vida de la organización fue muy breve, sirvió para darme un pantallazo general sobre los desafíos a los que se enfrenta cualquier emprendedor en el mundo IT. La empresa se dedicaba al análisis de datos y desarrollo de modelos que ayuden a tomar mejores decisiones en el rubro de la venta de indumentaria. (Ubicación: Buenos Aires, Argentina)"} LinkTo={'https://www.linkedin.com/company/nanobytes-odoo-erp-gold-partner/'} />

                </div>
            </div>
            <FooterCv />
        </>
    )
}
