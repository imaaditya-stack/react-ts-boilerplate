import React, { useState, Suspense } from 'react';
import { v4 as uuidv4 } from 'uuid';

console.log(process.env.NODE_ENV, process.env.AUTH_KEY);

const DynamicComponent = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "DynamicComponent" */ './DynamicComponent'
    ),
);

const Application: React.FC = () => {
  const [lazyLoad, setLazyLoad] = useState(false);

  return (
    <>
      <h1>Main App Component {uuidv4()}</h1>
      <button onClick={() => setLazyLoad(true)}>Load Dynamic Component</button>
      {lazyLoad && (
        <Suspense fallback={<>Loading...</>}>
          <DynamicComponent />
        </Suspense>
      )}
    </>
  );
};

export default Application;
