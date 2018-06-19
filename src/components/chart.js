import React from 'react';
import { SparkLines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <SparkLines data={props.data} limit={5} width={100} height={20} margin={5}>
        <SparklinesLine color={props.color}/>
      </SparkLines>
    </div>
  );
}