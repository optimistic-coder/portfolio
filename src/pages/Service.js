    import React,{useEffect} from 'react'
import Card from '../components/Card'
import Sdata from '../images/Sdata'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Service() {
    useEffect(()=>{
        AOS.init({
            duration : 3000
          });
    },[])
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">My Skills</h1>
        </div>
        <div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div
                        data-aos="fade-up"
                        className="row gy-4">
                            {Sdata.map((val,ind)=>{
                                return(
                                    <Card
                                    imgsrc={val.imgsrc}
                                    title = {val.title}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
