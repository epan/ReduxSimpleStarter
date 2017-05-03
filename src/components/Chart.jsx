import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({data, color}) => (
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
      </Sparklines>
);