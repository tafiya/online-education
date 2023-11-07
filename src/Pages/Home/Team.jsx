import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Team = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('team.json')
        .then(res=>res.json())
        .then( data =>setServices(data))
   
    },[])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className=" my-12">
              <div className="text-center mt-24">
                <h2 className=" text-xl text-[#FF3811] font-bold">Team</h2>
                <h1 className=" text-5xl font-bold">Meet Our Team</h1>
                <p className=" text-base font-normal my-4">the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which dont look even slightly believable. </p>
            </div>
            <div className=" w-3/4  m-auto">
                <div className="mt-12">
                <Slider {...settings}>
                {
                    services.map(service=>(       
                         <div key={service.id} className="card w-96 bg-base-100 shadow-xl h-[450px]">
                    <figure className="px-10 pt-10 h-1/2">
                      <img src={service.photo} alt="service picture" className="rounded-xl" />
                    </figure>
                    <div className="card-body h-1/2 text-center  ">
                      <h2 className="card-title text-2xl font-bold text-center">{service.name}</h2>
                      <div className=' flex my-4'>
                      <p className=' text-center"  text-base font-medium'>{service.details}</p>
                  
                      </div>
                     
                      
                    </div>
                  </div>))
                }
                </Slider>
                </div>
     
            </div>
            
            
        </div>
    );
};

export default Team;