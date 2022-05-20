import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

// importing MyRouts where we located all of our theme
import MyRouts from './routers/routes'

const TRACKING_ID = "UA-217873696-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <MyRouts />
    </div>
  );
}

export default App;