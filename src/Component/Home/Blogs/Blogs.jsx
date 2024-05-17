
import photo from '../../../assets/image/small-img.jpg'
import photo1 from '../../../assets/image/small-img1.jpg'




const Blogs = () => {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-center">Our <span className="text-rose-500">Blogs</span></h2>
            <p className="mx-auto text-center w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit quo nisi 
            <br />
            ipsam ipsa officiis natus. Accusamus pariatur eveniet impedit.</p>
            <div className='flex gap-7 justify-center mt-9'>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
  <figure><img className='w-1/2' src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    
    <h2 className="card-title text-xl font-medium text-rose-500">Admin</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores, facere distinctio rerum aut ea. Exercitationem voluptatem quod nihil!</p>
  </div>
</div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
  <figure><img className='w-1/2' src={photo1} alt="Shoes" /></figure>
  <div className="card-body">
    
    <h2 className="card-title text-xl font-medium text-rose-500">Admin</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores, facere distinctio rerum aut ea. Exercitationem voluptatem quod nihil!</p>
  </div>
</div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
  <figure><img className='w-1/2' src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    
    <h2 className="card-title text-xl font-medium text-rose-500">Admin</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores, facere distinctio rerum aut ea. Exercitationem voluptatem quod nihil!</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Blogs;