import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import gaston from '../../assets/img/gaston.jpeg'

export const Navbar = () => {

    const [checked, setChecked] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    /**
     * Cada vez que el estado checked cambie, actualiza la propiedad
     * data-theme en el HTML para que use el tema que estamos almacenando
     * en el localStorage
     */
    useEffect(() => {
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
    }, [checked]);

    /**
     * Actualiza el estado checked y el contenido de nuestro objeto
     * theme en el localStorage basados en el checkbox
     */
    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            setChecked(false);
        }
    };

    return (
        <div className='d-flex justify-content-between mt-4 px-4 navbar-style'>
            <div className='gap-4 navbar-left'>
                <Link className='nabvar-links' to='/quien-soy'>Sobre Gastón</Link>
                <Link className='nabvar-links' to='/proyectos'>Proyectos</Link>
            </div>
            <div className='d-flex gap-4 align-items-center navbar-right'>
                <a className='nabvar-links' target='_blank' rel="noopener noreferrer" href='https://github.com/GastonGarciaBauer' title="Github">Github</a>
                <a className='nabvar-links' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/gaston-garcia-bauer/' title="Linkedin">Linkedin</a>
                <span className="material-symbols-outlined">
                    apps
                </span>
                <img className='rounded-circle navbar-profile-photo' src={gaston} />
                <label>
                <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => toggleThemeChange()}
                    style={{display:"none"}}
                />
     
                    <span class="material-symbols-outlined sun-icon">
                        brightness_4
                    </span>
            </label>
            </div>


        </div>
    )
}
