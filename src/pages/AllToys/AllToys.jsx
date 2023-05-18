import React, { useEffect, useState } from 'react';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])
    return (
        <div>
            <h3>ALL TOYS HERE:{allToys.length}</h3>
        </div>
    );
};

export default AllToys;