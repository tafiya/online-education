import image1 from '../../assets/image/about.jpg'

const About = () => {
    return (
        <div className="container mx-auto"  >
       
                {/* banner */}
      <div className="hero h-96" style={{backgroundImage:`url( ${image1})` }}>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
<p className="mb-5">Hello there</p>
  <h1 className="mb-5 text-5xl font-bold">About Us </h1>
</div>
</div>
</div>
        

        <div className="my-14 max-w-7xl mx-auto">
        <h2 className="text-center lg:text-4xl text-xl font-semibold mt-20"> We<span className=" text-warning"> Create Assignment </span>That Lasts</h2>
         <p className="text-center lg:text-xl text-sm font-sm mt-4 mb-12">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs & budget.</p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <div className="card w-96 bg-base-100 ">
<div className="card-body">
<h2 className=" text-center card-title text-warning">Our Vision</h2>
<p>We have always wanted the young generation to shine and pave their own way to ultimate academic success. Thus, with an urge to back students with on-time, comprehensive academic assistance, we have established a promising team of former professors, subject matter experts and native writers. The stalwarts are available round the clock to assist students all across the globe, including major countries like Australia, Canada, Malaysia, The United States, The United Kingdom, India, Singapore and UAE..</p>

</div>
</div>
<div className="card w-96 bg-base-100 ">
<div className="card-body">
<h2 className=" text-center card-title text-warning">Our Approach</h2>
<p>OnlineEducation.com is more than just a name. We are a team of enthusiastic academic experts, determined to back you up with comprehensive solution. We started our journey a decade ago and have been running steadily ever since then. Over the years, our team of experts has observed how dreadful things can get for students dealing with the odds of narrow academic nightmare, lack of academic resources, unclear topics, tricky references and more.</p>

</div>
</div>
<div className="card w-96 bg-base-100 ">
<div className="card-body">
<h2 className=" text-center card-title text-warning">
Our Goals</h2>
<p>OnlineEducation.com is dedicated to covering you up with Essaytyper tool, Plagiarism Checker, free paraphraser, all-inclusive academic assistance, referencing aid, proofreading assistance and more. Moreover, at OnlineEducation.com, you are entitled to accessing a plethora of well-knit and informative blogs and assignment samples without shelling out anything extra..</p>

</div>
</div>
    </div>
   </div>


      
    </div>
    );
};

export default About;