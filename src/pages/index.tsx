import type { NextPage } from 'next';

import Dots from '@/modules/Home/Dots';

const Home: NextPage = () => {
  return (
    <div
      style={{
        minHeight: '1000vh',
        background: '#191C1E',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Dots />
    </div>
  );
};

export default Home;
