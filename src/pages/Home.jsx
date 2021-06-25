import React,{useEffect} from 'react'
import front from '../images/front.jpg'
import backs from '../images/backs.jpg'
import {Parallax} from 'react-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css'
export default function Home() {
    useEffect(()=>{
        AOS.init({
            duration : 2000
          });
    },[])
    return (
        <div>
            <Parallax
            style={{
                width:window.innerWidth,
                height:window.innerHeight
            }}
            bgImage={backs} strength={600}>
            <div style={{
                
                marginTop:"5%"}} className="row">
                <div className="col">
            <p 
            data-aos="fade-right"
            style={{
                fontSize:'5vh',
                marginLeft:window.innerWidth<500? 10:window.innerWidth*0.20  ,

                width:window.innerWidth<500? window.innerWidth:window.innerWidth*0.30  ,
                marginTop:"10%",
                color:'#ffffff',
                fontWeight:'bold',
                letterSpacing:1
            }}>
                    Hello, I'm Akash Sarade, a full stack developer.
                    </p>
                </div>
                <div className="col" data-aos="zoom-in-right"  >
                    <img className="zoom shadow p-3 mb-5 bg-white rounded" height="400px" width="300px" src={front}/>
                </div>
            </div>
            </Parallax>
        </div>
    )
}
