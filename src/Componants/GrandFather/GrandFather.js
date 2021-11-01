import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import Father from './Father/Father';

const GrandFather = () => {
     const [house, setHouse] = useState(1)
     return (
          <div className="gf">
               <button onClick={() => setHouse(house + 1)}>Increase</button>
               <h1>grandFather house: {house}</h1>
               <div className="gf-childern">
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
               </div>


          </div >
     );
};

export default GrandFather;