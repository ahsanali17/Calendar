import React, {Fragment} from 'react';

import { Day } from '../Day';

const Month = ({month} : any) => {
 return (
  <div className="flex-1 grid grid-cols-7 grid-rows-5">
   {month.map((row: any, i: number) => (
    <Fragment key={i}>
      {row.map((day: any, idx: number) => (
       <Day day={day} key={idx} rowIdx={idx}/>
      ))}
    </Fragment>
   ))}
  </div>
 );
}

export default Month ;