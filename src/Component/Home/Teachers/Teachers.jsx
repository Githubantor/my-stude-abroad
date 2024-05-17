import photo1 from '../../../assets/image/team1.jpg'
import photo2 from '../../../assets/image/team2 (2).jpg'
import photo3 from '../../../assets/image/team4.jpg'

const Teachers = () => {
    return (
        <div className='mt-16'>
        <h2 className='text-center text-rose-500 font-bold text-3xl'>Our Teachers</h2>
        <p className='text-center text-xl font-medium'>There are our Experainced Teachers</p>
        <div className='flex gap-7 justify-center mt-8'>
           
            <div className="card card-compact w-52 bg-base-100 shadow-xl">
  <figure><img src={photo1} alt="Shoes" /></figure>
  <div className="card-body bg-rose-500 text-white ">
    <h2 className="card-title">Alex </h2>
    <p>Faculty of philosophy</p>
  </div>
</div>
            <div className="card card-compact w-52 bg-base-100 shadow-xl">
  <figure><img src={photo2} alt="Shoes" /></figure>
  <div className="card-body  bg-rose-500 text-white">
    <h2 className="card-title text">Lica </h2>
    <p>Faculty of MBA</p>
  </div>
</div>
            <div className="card card-compact w-52 bg-base-100 shadow-xl">
  <figure><img src={photo3} alt="Shoes" /></figure>
  <div className="card-body  bg-rose-500 text-white">
    <h2 className="card-title">Jhoony </h2>
    <p>Faculty of History</p>
  </div>
</div>
        </div>
        </div>
    );
};

export default Teachers;