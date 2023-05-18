import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    const gallery = useLoaderData();
    return (
        <div className='text-center'>
            <h2>This is home:{gallery.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    gallery.map(image => <Gallery
                        key={image._id}
                        image={image}
                    >

                    </Gallery>)
                }
            </div>
        </div>
    );
};

export default Home;