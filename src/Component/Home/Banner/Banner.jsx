import photo1 from '../../../assets/image/depositphotos_143200347-stock-photo-study-abroad-text-with-woman.jpg'

const Banner = () => {
    return (
        <div className="hero mt-16">
            <img className='w-5/6' src={photo1} alt="" />
  <div className="hero-overlay w-5/6 bg-opacity-60"> </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to <br />
     <span className='text-rose-500 mt-4'>EduPoint</span>
      </h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary btn-sm mt-7 w-1/2 bg-rose-500 border-rose-500 text-white font-medium">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;