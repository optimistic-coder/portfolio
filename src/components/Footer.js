import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {SiLinkedin} from 'react-icons/si'
import {ImGithub} from 'react-icons/im'

import '../index.css'
export default function Footer() {
    return (
        <>
            <footer style={{marginTop:"10%"}} className="w-100 bg-light text-center">
                <p>@ 2020 Optimistic coder. All Rights Reserved | Terms and conditions 
                <FaTwitter style={{cursor:'pointer',marginLeft:"1%"}} className="wobble" size={17} color="#00ffff"/>
                <SiLinkedin className="wobble" style={{marginLeft:"1%",marginRight:"1%",cursor:'pointer'}}  size={17} color="#0e76a8 "/>
                <ImGithub style={{cursor:'pointer'}}  className="wobble" size={17} color="#000000 "/>

                </p>
            </footer>
        </>
    )
}
