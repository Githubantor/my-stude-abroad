import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Course from "../Course/Course";
import Hero1 from "../Hero1/Hero1";
import Teachers from "../Teachers/Teachers";
import Univarsity from "../Univarsity/Univarsity";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Univarsity></Univarsity>
            <Course></Course>
            <Hero1></Hero1>
            <Teachers></Teachers>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;