import React from 'react';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import Main from '../layouts/Main';
import { MdTravelExplore } from 'react-icons/md';

export default function Home({ auth }) {
  return (
    <Main auth={auth}>
      <Hero />
      <MenuItem name="Wisata" icon={<MdTravelExplore size={50} />} />
    </Main>
  );
}
