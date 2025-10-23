'use client'

import Footer from "../components/Footer";
import { InputPass } from "../components/InputPass";
import { InputUser } from "../components/InputUser";
import LandingPageMenu from "../components/LandingPageMenu"
import { Button } from 'react-bootstrap';

export default function Login(){
    return(
        <>
            <LandingPageMenu />
            <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center w-100 h-100">
                    
                        <button className="bg-blue-700 px-5 py-1 rounded-md text-white cursor-pointer active:translate-y-[2px]">Consultar aluno</button>
                   
                </div>
            </div>
           
            <Footer />
        </>
    );
}