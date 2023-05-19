import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import DisplayCategory from '../DisplayCategory/DisplayCategory';

const Home = () => {
    const gallery = useLoaderData();
    return (
        <div className='text-center'>
            <h2>Our Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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