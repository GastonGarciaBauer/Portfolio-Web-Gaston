import ImageSlider from "../components/Carousel/Carousel";
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";



export const QuienSoy = () => {


    return (
        <>
            <NavbarCv />
            <div className="container row d-flex flex-wrap justify-content-center my-5">
                <div className="col-12 col-sm-8">
                    <h1 className="pb-5">Quién soy</h1>
                    <p className="pb-3">Soy Gastón, nacido el 29/10/1989 en Capital Federal, Buenos Aires, Argentina, amante de la programación, la física y el básquet. En el año 2022 decidí mudarme a Morón, Provincia de Buenos Aires, para empezar mis estudios superiores en programación en la Universidad Tecnológica Nacional - Regional Haedo.</p>
                    <p className="pb-3">Me defino como una persona emprendedora, autodidacta y dinámica, que le gusta estar en constante movimiento buscando nuevos retos y desafíos. Durante mi cursada pude concretar algunos proyectos que me permitirieron ir adentrándome en las nuevas tecnologías y la programación, descubriendo así que lo que realmente me apasionaba era sentarme frente a la pantalla y crear código.</p>
                    <p className="pb-5">Mi objetivo es consolidarme como un gran programador y seguir aprendiendo día a día para estar actualizado de las nuevas tendencias y tecnologías. Te invito a que sigas recorriendo mi CV para que puedas conocerme aún más. </p>
                    {/* <ImageSlider /> */}

                </div>
            </div>
            <FooterCv />
        </>
    )
}

