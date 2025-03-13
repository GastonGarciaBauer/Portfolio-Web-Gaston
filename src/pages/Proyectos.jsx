
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import logo_proton from '../../src/assets/img/Logo.jpg'
import chess from '../../src/assets/img/chess.png'
import proti from '../../src/assets/img/proti.jpeg'
import todo from '../../src/assets/img/todo.png'
import X from '../../src/assets/img/X.png'
import cculator from '../../src/assets/img/logo-cculator.png'
import cursophp from '../../src/assets/img/logo_php.png'
import totalwar from '../../src/assets/img/totalwar.png'
import futbol2 from '../../src/assets/img/futbol2.png'
import { useEffect } from "react";


export const Proyectos = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavbarCv claseProy={'titulos-cv-style-proy'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">

                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://github.com/GastonGarciaBauer/ProtonReloaded'>Protón Reloaded</a></>)} 
                        url={"HTML, CSS, React, Bulma, PHP, MySql"} 
                        urlTitle={"Tienda virtual de insumos para mascotas y gestión de turnos"} 
                        img={proti} 
                        description={"Plataforma integral de venta de insumos para mascotas y gestor de turnos para peluquería canina. Si bien es un proyecto diferente, se basó en la idea de 'Protón'. [Proyecto final de la Tecnicatura]."} LinkTo={'https://github.com/GastonGarciaBauer/ProtonReloaded'} 
                    />
                    
                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://github.com/GastonGarciaBauer/ecommerce_mascotas'>Protón</a></>)} 
                        url={"HTML, CSS, JS, PHP. MySql"} 
                        urlTitle={"Tienda virtual de insumos para mascotas"} 
                        img={logo_proton} 
                        description={"Plataforma tipo e-commerce de venta de insumos para mascotas. Proyecto final de la materia ~ Laboratorio IV~."} 
                        LinkTo={'https://github.com/GastonGarciaBauer/ecommerce_mascotas'} 
                    />
                    
                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://twitter-followcard-2025.netlify.app'>Twitter Follow Card</a></>)} 
                        url={"React, Vite, Bootstrap"} 
                        urlTitle={"Componente de Twitter `Follow Card`"} 
                        img={X} 
                        description={"Card con botón funcional utilizando bootstrap para los estilos."} 
                        LinkTo={'https://twitter-followcard-2025.netlify.app'} 
                    />
                    
                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://queensgambit.netlify.app'>The Queen`s Gambit</a></>)} 
                        url={"HTML, CSS, JS"} 
                        urlTitle={"Página de la Serie de TV"} 
                        img={chess} 
                        description={"Proyecto integrador de la materia ~Laboratorio III~ de la Tecnicatura. Página web de la serie de Netflix 'Gambito de Dama'."} 
                        LinkTo={'https://github.com/GastonGarciaBauer/The-Queen-s-Gambit---Page'} 
                    />

                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://github.com/GastonGarciaBauer/Torneo-Futbol'>Torneo de Fútbol</a></>)} 
                        url={"C#"} 
                        urlTitle={"Aplicación por consola"} 
                        img={futbol2} 
                        description={"Proyecto integrador de la materia ~Programación III~ de la Tecnicatura. Aplicación por consola desarrollada en C# que simula la creación de un equipo de fútbol con sus características propias, además de la incorporación de entrenadores y jugadores para participar en un torneo."} 
                        LinkTo={'https://github.com/GastonGarciaBauer/Torneo-Futbol'} 
                    />

                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://github.com/GastonGarciaBauer/Total_War_I'>Total War I</a></>)} 
                        url={"C#"} 
                        urlTitle={"Juego bélico"} 
                        img={totalwar} 
                        description={"Total War I es un juego bélico por consola, realizado en C#. El proyecto es un prototipo en fase Beta del juego en cuestión."} 
                        LinkTo={'https://github.com/GastonGarciaBauer/Total_War_I'} 
                    />

                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://github.com/GastonGarciaBauer/curso-php'>Curso PHP</a></>)} 
                        url={"HTML, CSS, PHP"} 
                        urlTitle={"Fundamentos y pruebas"} 
                        img={cursophp} 
                        description={"Algunas pruebas hechas en php, siguiendo un video de un curso online."} 
                        LinkTo={'https://github.com/GastonGarciaBauer/curso-php'} 
                    />
                    
                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://github.com/GastonGarciaBauer/Calculadora-Basica-C'>C-culator</a></>)}
                        url={"C"} 
                        urlTitle={"Calculadora básica"} 
                        img={cculator} 
                        description={"C-culator es una calculadora básica hecha en lenguaje C, que tiene como objetivo devolver por consola la operación solicitada entre dos números."} 
                        LinkTo={'https://github.com/GastonGarciaBauer/Calculadora-Basica-C'} 
                    />

                    <InfoCard 
                        title={(<><a 
                        className="card-title" 
                        target="_blank" 
                        href='https://webto-dolist.netlify.app/'>ToDo List</a></>)} 
                        url={"HTML, CSS, Bootstrap, Javascript"} 
                        urlTitle={"Tareas por hacer"} 
                        img={todo} 
                        description={"Todo programador debe tener en su listado de proyectos un ToDo List, y yo no iba a ser la expcepción. Con este podremos añadir tareas, marcalas como hechos y eliminarlas. De esta manera, con Javascript jugamos con los cambios de estilos."} 
                        LinkTo={'https://webto-dolist.netlify.app/'} 
                    />


                </div>
            </div>
            <FooterCv />
        </>
    )
}
