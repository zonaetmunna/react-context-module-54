import React from 'react';
import MySelf from '../../MySelf/MySelf';

const Father = (props) => {
     const { house } = props;
     return (
          <div className="father">

               <h1>Father house {house}</h1>
               <div className="father-children">
                    <MySelf house={house}></MySelf>
               </div>


          </div>
     );
};

export default Father;