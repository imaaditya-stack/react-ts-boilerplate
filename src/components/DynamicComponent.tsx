import React from 'react';
import { v4 as uuidv4 } from 'uuid';

//Added to test babel polyfills
console.log(Object.values({ TEST: 'TEST' }));

const DynamicComponent: React.FC = () => {
  return <div>I am dynamic component {uuidv4()}</div>;
};

export default DynamicComponent;
