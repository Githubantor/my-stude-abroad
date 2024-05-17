import photo1 from '../../../assets/image/project-img1.jpg'
import photo2 from '../../../assets/image/project-img2.jpg'
import photo3 from '../../../assets/image/project-img3.jpg'

const Course = () => {
    return (
      <div className='mt-16'>
        <h2 className='text-center text-2xl font-bold text-rose-500'>Our Courses</h2>
        <p className='text-center font-medium'>Choose your Dream for a shine life!</p>
        <div className='flex gap-6 justify-center mt-8'>
        <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo1}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-rose-500">Regular MBA</h2>
    <p>we have the 100 years of experiance!</p>
  </div>
  <div className="card-actions">
      <button className="btn btn-primary btn-sm w-full border-rose-500 bg-rose-500">Learn More</button>
    </div>
</div>
        <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo2}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-rose-500">Philosophy</h2>
    <p>we have the 100 years of experiance!</p>
  </div>
  <div className="card-actions">
      <button className="btn btn-primary btn-sm w-full border-rose-500 bg-rose-500">Learn More</button>
    </div>
</div>
        <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo3}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-rose-500">History</h2>
    <p>we have the 100 years of experiance!</p>
  </div>
  <div className="card-actions">
      <button className="btn btn-primary btn-sm w-full border-rose-500 bg-rose-500">Learn More</button>
    </div>
</div>
        </div>
        </div>
    );
};

export default Course;