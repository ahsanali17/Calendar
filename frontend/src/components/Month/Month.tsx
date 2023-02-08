import React from 'react';

import { Day } from '../Day';

const Month = ({month} : any) => {
 return (
  <div className="flex-1 grid grid-cols-7 grid-row">
   {month.map((row: any, i: number) => (
    <div key={i}>
      {row.map((day: any, idx: number) => (
       <Day day={day} key={idx} />
      ))}
    </div>
   ))}
  </div>
 );
}

export default Month ;