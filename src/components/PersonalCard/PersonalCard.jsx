import React from "react"
import './PersonalCard.css'
import { Link } from "react-router-dom"
import gaston from '../../assets/img/gaston.jpeg'
import gaston2 from '../../assets/img/gaston2.jpeg'
import logoLikedin from '../../assets/img/logo-linkedin.png'
import logoGithub from '../../assets/img/logo-github.webp'
import logoX from '../../assets/img/logo-x.avif'
import logoHtml from '../../assets/img/logo-html.png'
import logoCss from '../../assets/img/logo-css.svg'
import logoBootstrap from '../../assets/img/logo-bootstrap.png'
import logoJs from '../../assets/img/logo-js.png'
import LogoReact from '../../assets/img/logo-react.png'
import logoPython from '../../assets/img/logo-python.png'
import logoPHP from '../../assets/img/php.png'
import logoSql from '../../assets/img/sql.png'

export const PersonalCard = ({LinkTo}) => {
    return (
        <div className="personal-card container px-4">
            <div>
                <p className="profile-name pb-2">Gastón García Bauer</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <p className="pe-2 profile-rol">Programador FullStack</p>
                        <span class="material-symbols-outlined">
                            more_vert
                        </span>
                    </div>
                    <div>
                        <Link to={LinkTo}>
                            <span class="material-symbols-outlined arrow-icon">
                                chevron_right
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="photo-block">
                <img src={gaston2} alt="gaston-photo" className="rounded mt-3 img-fluid" />
            </div>
            <div className="pb-4">
                <p className="pt-4 pb-3 profile-description">Gastón García Bauer es un programador FullStack argentino que vive en Morón, Provincia de Buenos Aires. Hace 3 años y medio se introdujo en el mundo IT realizando distintos cursos y capacitaciones. Es apasionado de la programación, la tecnología y los deportes, le gusta viajar, jugar ajedrez y tiene como meta ser un gran programador.</p>
                <p className="pb-2"><span className="fw-bold">Nacimiento:</span> 29 de octubre de 1989 (35 años), <a href="https://es.wikipedia.org/wiki/Belgrano_(Buenos_Aires)" target="_blank" className="text-decoration-none">Belgrano, CABA, Argentina</a></p>
                <p className="pb-2"><span className="fw-bold">Títulos:</span> Técnico Universitario en Programación, Desarrollador Web Full-Stack, QA Testing</p>
                <p className="pb-2"><span className="fw-bold">Habilidades blandas:</span> Comunicación efectiva, trabajo en equipo, resolución de problemas, adaptabilidad y flexibilidad.</p>
                <p className="pb-2"><span className="fw-bold">Idiomas:</span> Español (nativo) - Inglés (intermedio)</p>
                <p className="pb-2"><span className="fw-bold">Intereses:</span> Programación, física, ajedrez, fútbol americano, básquet, viajes</p>
                <p className="pb-2"><span className="fw-bold">Frase favorita:</span> "Lo imposible solo lleva más tiempo."</p>
            </div>
            <div className="perfiles">
                <p className="fs-2 pb-2">Perfiles</p>
                <div className="d-flex gap-3">
                    <a target="_blank" href="https://www.linkedin.com/in/gaston-garcia-bauer/" rel="noopener noreferrer" title="Linkedin"><img className="profile-icons" src={logoLikedin}/></a>
                    <a target="_blank" href="https://github.com/GastonGarciaBauer" rel="noopener noreferrer" title="Github"><img className="profile-icons" src={logoGithub}/></a>
                </div>
            </div>

            <div className="perfiles">
                <p className="fs-2 pb-2">Tecnologías</p>
                <div className="d-flex flex-wrap gap-2">
                    <img className="profile-icons-tech" src={logoHtml} title="HTML"/>
                    <img className="profile-icons-tech" src={logoCss} title="CSS"/>
                    <img className="profile-icons-tech" src={logoBootstrap} title="Bootstrap"/>
                    <img className="profile-icons-tech" src={logoJs} title="JavaScript"/>
                    <img className="profile-icons-tech" src={LogoReact} title="React"/>
                    <img className="profile-icons-tech" src={logoPython} title="Python"/>
                    <img className="profile-icons-tech" src={logoPHP} title="PHP"/>
                    <img className="profile-icons-tech" src={logoSql} title="SQL"/>
                   
                </div>
            </div>
        </div>
    )
}
