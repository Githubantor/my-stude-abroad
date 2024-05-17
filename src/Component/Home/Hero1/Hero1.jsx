import { FaChalkboardTeacher, FaGraduationCap, FaPlane, FaTruck } from 'react-icons/fa';
import photo1 from '../../../assets/image/istockphoto-474982168-640x640.jpg'

const Hero1 = () => {
    return (
        <div className="hero mt-14">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={photo1} className=" rounded-lg shadow-2xl" />
    <div className='w-1/2 ml-16'>
      <h1 className="text-3xl font-medium text-rose-500">About Education</h1>
      <p>We are helping small business</p>
      <p className="pt-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        <div className='flex gap-5'>
        <FaGraduationCap className='/ size-9  text-rose-500' />
       <div>
       <h3 className='text-2xl font-medium'> Education</h3>
        <p>Lorem ipsum dolor sit amet.</p>
       </div>
        </div>
        <div className='flex gap-5 '>
        <FaPlane className='size-9  text-rose-500'></FaPlane>
        <div>
        <h3 className='text-2xl font-medium'> Onilne Class</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
        <div className='flex gap-5'>
        <FaChalkboardTeacher className='size-9 text-rose-500' />
       <div>
       <h3 className='text-2xl font-medium'>Teacher</h3>
        <p>Lorem ipsum dolor sit amet.</p>
       </div>
        </div>
        <div className='flex gap-5'>
        <FaTruck className='size-9  text-rose-500'></FaTruck>
        <div>
        <h3 className='text-2xl font-medium'> Transpot</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
      </div>
      <button className="btn btn-sm w-1/2 bg-rose-500 border-rose-500 mt-10 text-white ">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero1;