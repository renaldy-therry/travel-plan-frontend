import React from 'react';
import Main from '../layouts/Main';

export default function Home({ auth }) {
  return (
    <Main auth={auth}>
      <p>Home</p>
    </Main>
  );
}
