import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import DisplayCategory from '../DisplayCategory/DisplayCategory';
import Aos from 'aos';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle('Home');
    const gallery = useLoaderData();
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
        });
    }, []);
    return (
        <div className='text-center'>
            <h2 className='mt-4'>Our Gallery</h2>

            <div data-aos="flip-down" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mt-5">
                {
                    gallery.map(image => <Gallery
                        key={image._id}
                        image={image}
                    >

                    </Gallery>)
                }
            </div>

            <h2 className='mt-5'>Sub category</h2>
            <div>
                <DisplayCategory></DisplayCategory>
            </div>
        </div>
    );
};

export default Home;