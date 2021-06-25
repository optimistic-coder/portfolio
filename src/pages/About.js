import React,{useEffect} from 'react'
import front from '../images/front.jpg'
import backs from '../images/backs.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css'
export default function About() {
    useEffect(()=>{
        AOS.init({
            duration : 2000
          });
    },[])
    return (
        <div>
         <div style={{ marginTop:"5%"}} className="row">
                    <div 
                    data-aos="zoom-in-right"
                    style={{
                      marginLeft:window.innerWidth<500? 10:window.innerWidth*0.20  ,

                    }} >
                    <img className="zoom shadow p-3 mb-5 bg-white rounded" height="400px" width="300px" src={front}/>
                    </div>
                <div
                data-aos="fade-left"
                >
                        <p style={{
                            fontSize:'3vh',
                            width:window.innerWidth<500? window.innerWidth*0.90:window.innerWidth*0.30  ,
                            marginTop:"10%",
                            color:'#000000',
                            fontWeight:'bold',
                            letterSpacing:1,
                            marginLeft:window.innerWidth<500?10:'10%'
                        }}>
                               I am a Full stack developer with industry experience building web applications and mobile apps. I specialize in JavaScript and have professional experience working with React Native and Nodejs, Flutter. I also have experience working with React, Node, Mongodb, c, c++, java, python. 
                        </p>
                </div>
                
            </div>
        </div>
    )
}
