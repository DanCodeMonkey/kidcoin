'use client'

import Footer from "../components/Footer";
import { InputPass } from "../components/InputPass";
import LandingPageMenu from "../components/LandingPageMenu"

export default function Login(){
    return(
        <>
            <LandingPageMenu />
           <div>
                <InputPass label={"Senha"} inputName={"senha"} id={"senha"} />
           </div>
            <Footer />
        </>
    );
}