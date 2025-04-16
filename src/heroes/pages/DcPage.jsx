import React from 'react';
import { HeroList } from '../components';

export const DcPage = () => {
  return (
    <>
      <h1>Dc comics</h1>
      <hr />

      <HeroList publisher={'DC Comics'} />
    </>
  );
};
