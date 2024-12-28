import { useState, useEffect } from "react"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { SearchBoxHome } from "../components/SearchboxHome/SearchBoxHome"

export const Home = () => {

    return (
        <>
            <Navbar />
            <div className="bloque-margen">
                <div className="d-flex justify-content-center align-items-center google-word">
                    <span className="google-blue">G</span>
                    <span className="google-red">a</span>
                    <span className="google-yellow">s</span>
                    <span className="google-blue">t</span>
                    <span className="google-green">ó</span>
                    <span className="google-red">n</span>
                    
                </div>
                <SearchBoxHome />
            </div>


            <Footer />

        </>
    )
} 
