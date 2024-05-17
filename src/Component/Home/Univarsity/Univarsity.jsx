import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const University = () => {
    const [uni, setUni] = useState([]);

    useEffect(() => {
        fetch('univarsity.json')
            .then(res => res.json())
            .then(data => setUni(data.universities))
    }, []);

    return (
        <div className="mt-16">
            <h2 className="text-center font-bold text-2xl text-rose-500">Univesity</h2>
            <p className="w-1/2 text-center mx-auto">You Can apply here! for touch your dream and feel
            <br />
             the happiness of your goal!</p>
        <div className="flex gap-6 justify-center mt-9">
            {
            uni.map(aUni => (
                <Link key={aUni.name}>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={aUni.img} alt={aUni.name} className="rounded-xl w-1/2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{aUni.name}</h2>
                            <p className="mt-10">{aUni.description}</p>
                        </div>
                        <div className="card-actions">
                                <button className="btn btn-primary bg-rose-500 w-full btn-sm border-rose-500 text-white">Learn More</button>
                            </div>
                    </div>
                
                </Link>
            ))
            }
        </div>
        </div>
    );
};

export default University;
