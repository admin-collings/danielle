import React from 'react';
import ReactDOM from 'react-dom';

const FilterSection = () => {
    return ( 
        <div className="w-100 text-end">
            <ul className="list-unstyled">
                <li className="d-inline-block mx-2">
                    <i className="fas fa-th-large h3"></i>
                </li>
                <li className="d-inline-block">
                    <i className="fa fa-list h3"></i>
                </li>
            </ul>
        </div>
     );
}
 
export default FilterSection;