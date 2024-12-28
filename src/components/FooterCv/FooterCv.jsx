import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCv.css'


export const FooterCv = () => {
    return (
        <>
            <div className='container-fluid footer-extended-logo d-flex'>
                <span className="google-blue">G</span>
                <div>
                    <span className="google-red">a</span>
                    <p className='footer-numbers number-one'>1</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>2</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>3</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>4</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>5</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>6</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>7</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>8</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>8</p>
                </div>
                <div>
                    <span className="google-yellow">a</span>
                    <p className='footer-numbers'>10</p>
                </div>
                <span className="google-blue">s</span>
                <span className="google-green">t</span>
                <span className="google-red">ó</span>
                <span className="google-blue">n</span>
            </div>
            
            <div className='footer-cv-container'>
                <div className='footer-cv container d-flex pb-2'>
                    <div className='d-flex flex-wrap'>
                        <p>Argentina</p>
                        <span className='text-secondary mx-3'>|</span>
                        <p className='fw-bold'>La ubicación donde estás, Ciudad -</p>
                        <p className='text-primary ms-2'>Según tus sitios (casa) - Actualizar ubicación</p>
                    </div>
                </div>
                <hr/>
            </div>
            
            
        </>
    )
}
