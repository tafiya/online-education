import faq from '../../assets/image/faq.jpg'

const Faq = () => {
    return (
      <div className=' max-w-7xl mx-auto'>
        <div className="text-center mt-24">
          <h1 className=" text-5xl font-bold">Frequently Asked Question</h1>
        </div >
        <div className=" flex md:flex-row flex-col mt-8 ">
          <div  className='md:w-1/2 md:mb-0 mb-6'>
            <img src={faq} className='h-96 rounded-lg border border-white' alt="" />

          </div>
          <div  className='md:w-1/2 md:mb-0 mb-6 grid grid-cols-1 '>
            <div className="collapse bg-yellow-300">
              <input type="radio" name="my-accordion-1" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Question 1: How do I submit assignments online?
              </div>
              <div className="collapse-content">
                <p>To submit assignments online, log in to your courses learning management system (LMS) or assignment portal. Follow the instructions provided by your instructor, which may involve uploading files or using specific submission tools within the platform.</p>
              </div>
            </div>
            <div className="collapse bg-yellow-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Question 2: What should I do if I experience technical issues while submitting an assignment online?
              </div>
              <div className="collapse-content">
                <p>If you encounter technical problems, contact your instructor or the technical support team of your educational institution immediately. They can provide guidance on how to resolve the issue or offer alternative submission methods.</p>
              </div>
            </div>
            <div className="collapse bg-yellow-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Question 3: What file formats are typically accepted for online assignments?
              </div>
              <div className="collapse-content">
                <p>Commonly accepted file formats include PDF</p>
              </div>
            </div>

          </div>

        </div> 
      </div>

    );
};

export default Faq;