import img1 from '../../assets/image/pexels-andrea-piacquadio-3769021.jpg';
import img2 from '../../assets/image/pexels-ivan-samkov-4458554.jpg';
import img3 from '../../assets/image/pexels-julia-m-cameron-4144294.jpg';
import img4 from '../../assets/image/slide4.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full left-0  top-0">
            <div className='text-white w-2/3 pl-12 md:ml-24'>
              <h1 className=' text-6xl font-bold mb-6'>Lets Grow <br></br> <span className=' text-yellow-500'>your Education</span>  <br /> Level Up</h1>
              <p className='mb-6'>Hey! would you link to grow up your skill and if you are interested to do just start here</p>
         
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full left-0  top-0">
          <div className='text-white w-2/3 pl-12 md:ml-24'>
              <h1 className=' text-6xl font-bold mb-6'>Lets Grow <br></br> <span className=' text-yellow-500'>your Education</span>  <br /> Level Up</h1>
              <p className='mb-6'>Hey! would you link to grow up your skill and if you are interested to do just start here</p>
            
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full left-0  top-0">
          <div className='text-white w-2/3 pl-12 md:ml-24'>
              <h1 className=' text-6xl font-bold mb-6'>Lets Grow <br></br> <span className=' text-yellow-500'>your Education</span>  <br /> Level Up</h1>
              <p className='mb-6'>Hey! would you link to grow up your skill and if you are interested to do just start here</p>
             
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-lg" />
          <div className="absolute flex  rounded-xl items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full left-0  top-0">
          <div className='text-white w-2/3 pl-12 md:ml-24'>
              <h1 className=' text-6xl font-bold mb-6'>Lets Grow <br></br> <span className=' text-yellow-500'>your Education</span>  <br /> Level Up</h1>
              <p className='mb-6'>Hey! would you link to grow up your skill and if you are interested to do just start here</p>
           
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;