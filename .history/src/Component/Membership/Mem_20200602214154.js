import React from 'react';
import { useParams } from 'react-router-dom';
const Mem = () => {
    const { plan }=useParams();
    return (
        
        <div>
            console.log(plan)
        </div>
    );
};

export default Mem;