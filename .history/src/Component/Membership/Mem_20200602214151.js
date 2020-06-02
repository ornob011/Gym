import React from 'react';
import { useParams } from 'react-router-dom';
const Mem = () => {
    const { plan }=useParams();
    return (
        
        <div>
            console.log(pl)
        </div>
    );
};

export default Mem;