import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import DisplayCategory from '../DisplayCategory/DisplayCategory';
import Aos from 'aos';


const Home = () => {
    const gallery = useLoaderData();
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className='text-center'>
            <h2 className='mt-4'>Our Gallery</h2>

            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mt-5">
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