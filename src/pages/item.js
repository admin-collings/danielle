import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';

const Item = () => {
    const { id } = useParams()

    return ( 
        <>
            <p>Item - { id } </p>
        </>
     );
}
 
export default Item;