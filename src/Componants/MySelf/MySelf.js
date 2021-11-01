import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../../App';

const MySelf = (props) => {
     const { house } = props;
     const { ornaments } = useContext(RingContext)
     return (
          <div className="myself">
               <h1>my house: {house}</h1>
               <h1>{ornaments}</h1>

          </div>
     );
};

export default MySelf;